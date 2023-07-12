import { AppActionsType, AppThunkType } from './reduxStore';
import { Dispatch } from 'redux';
import { authAPI } from '../api/socialNetworkAPI';

const initialState: InitialAuthUserDataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

export const authReducer = (
    state: InitialAuthUserDataStateType = initialState, action: AppActionsType
): InitialAuthUserDataStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return { ...state, ...action.data, isAuth: true };
        default:
            return state;
    }
};

// actions
export const setUserData = (data: ResponseAuthUserDataType) =>
    ({ type: 'SET-USER-DATA', data } as const);

// thunks
export const getAuthUser = (): AppThunkType => async (dispatch: Dispatch<AppActionsType>) => {
    try {
        const res = await authAPI.getAuthUser();
        res.resultCode === 0 && dispatch(setUserData(res.data));
    } catch (e) {
        console.error(e);
    }
};

// types
export type ResponseAuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialAuthUserDataStateType = ResponseAuthUserDataType & {
    isAuth: boolean
    isFetching: boolean
};