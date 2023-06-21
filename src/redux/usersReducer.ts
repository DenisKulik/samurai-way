import { ActionsTypes } from './reduxStore';

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        large: string
        small: string
    }
    followed: boolean
}

export type InitialUsersStateType = {
    users: UserType[]
};

const initialState: InitialUsersStateType = {
    users: []
};

export const followUserAC = (userId: number) =>
    ({ type: 'FOLLOW', userId } as const);
export const unfollowUserAC = (userId: number) =>
    ({ type: 'UNFOLLOW', userId } as const);
export const setUsersAC = (users: UserType[]) =>
    ({ type: 'SET-USERS', users } as const);

const usersReducer = (
    state: InitialUsersStateType = initialState, action: ActionsTypes
): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: true } : user)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: false } : user)
            };
        case 'SET-USERS':
            return { ...state, users: [ ...state.users, ...action.users ] };
        default:
            return state;
    }
};

export default usersReducer;