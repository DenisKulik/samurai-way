import { stopSubmit } from 'redux-form'
import { AppThunkDispatch, AppThunkType } from 'redux/store'
import { authAPI, LoginType } from 'api/socialNetworkAPI'

const initialState: InitialAuthUserDataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (
    state: InitialAuthUserDataStateType = initialState,
    action: AuthActionsType,
): InitialAuthUserDataStateType => {
    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
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
    ({ type: 'AUTH/SET-USER-DATA', payload: { data, isAuth } }) as const

// thunks
export const getAuthUser = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await authAPI.me()
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
}
export type AuthActionsType = ReturnType<typeof setUserData>
