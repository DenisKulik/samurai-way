import { stopSubmit } from 'redux-form'
import { AppThunkDispatch, AppThunkType } from 'state/store'
import { authAPI, LoginType, securityAPI } from 'api/socialNetworkAPI'

const initialState: InitialAuthUserDataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, // if null then captcha is not required
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
        case 'AUTH/SET-CAPTCHA-URL':
            return {
                ...state,
                captchaUrl: action.payload.captchaUrl,
            }
        default:
            return state
    }
}

// actions
export const setUserData = (data: ResponseAuthUserDataType, isAuth: boolean) =>
    ({ type: 'AUTH/SET-USER-DATA', payload: { data, isAuth } }) as const
export const setCaptchaUrl = (captchaUrl: string) =>
    ({ type: 'AUTH/SET-CAPTCHA-URL', payload: { captchaUrl } }) as const

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
            } else if (res.resultCode === 10) {
                dispatch(getCaptchaUrl())
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

export const getCaptchaUrl = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaUrl(res.url))
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
    captchaUrl: string | null
}
export type AuthActionsType = ReturnType<typeof setUserData> | ReturnType<typeof setCaptchaUrl>
