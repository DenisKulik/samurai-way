import { ActionsTypes } from './reduxStore';

type ResponseType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialUsersStateType = ResponseType & {
    isFetching: boolean
};

const initialState: InitialUsersStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: true
};

export const setUserData = (data: ResponseType) =>
    ({ type: 'SET-USER-DATA', data } as const);

const authReducer = (
    state: InitialUsersStateType = initialState, action: ActionsTypes
): InitialUsersStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
};

export default authReducer;