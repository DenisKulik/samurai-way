import { ActionsTypes } from './reduxStore';

export type ResponseAuthUserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialAuthUserDataStateType = ResponseAuthUserDataType & {
    isAuth: boolean
    isFetching: boolean
};

const initialState: InitialAuthUserDataStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true
};

export const setUserData = (data: ResponseAuthUserDataType) =>
    ({ type: 'SET-USER-DATA', data } as const);

const authReducer = (
    state: InitialAuthUserDataStateType = initialState, action: ActionsTypes
): InitialAuthUserDataStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export default authReducer;