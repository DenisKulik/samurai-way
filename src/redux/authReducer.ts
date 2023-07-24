import { AppThunkDispatch, AppThunkType } from './reduxStore'
import { authAPI, LoginType } from '../api/socialNetworkAPI'
import { stopSubmit } from 'redux-form'

const initialState: InitialAuthUserDataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
}

export const authReducer = (
    state: InitialAuthUserDataStateType = initialState,
    action: AuthActionsType,
): InitialAuthUserDataStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload.data,
                isAuth: action.payload.isAuth,
            }
        default:
            return state
    }
}

// actions
export const setUserData = (data: ResponseAuthUserDataType, isAuth: boolean) =>
    ({ type: 'SET-USER-DATA', payload: { data, isAuth } }) as const

// thunks
export const getAuthUser = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await authAPI.getAuthUser()
        res.resultCode === 0 && dispatch(setUserData(res.data, true))
    } catch (e) {
        console.error(e)
    }
}

export const login =
    (data: LoginType): AppThunkType =>
    async (dispatch: AppThunkDispatch) => {
        try {
            const res = await authAPI.login(data)
            if (res.resultCode === 0) {
                dispatch(getAuthUser())
            } else {
                dispatch(
                    stopSubmit('login', {
                        _error: res.messages[0] || 'Something went wrong',
                    }),
                )
            }
        } catch (e) {
            console.error(e)
        }
    }

export const logout = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await authAPI.logout()
        res.resultCode === 0 &&
            dispatch(getAuthUser()) &&
            dispatch(setUserData({ id: null, email: null, login: null }, false))
    } catch (e) {
        console.error(e)
    }
}

// types
export type ResponseAuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialAuthUserDataStateType = ResponseAuthUserDataType & {
    isAuth: boolean
    isFetching: boolean
}

export type AuthActionsType = ReturnType<typeof setUserData>
