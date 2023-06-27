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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
};

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

export const followUserAC = (userId: number) =>
    ({ type: 'FOLLOW', userId } as const);
export const unfollowUserAC = (userId: number) =>
    ({ type: 'UNFOLLOW', userId } as const);
export const setUsersAC = (users: UserType[]) =>
    ({ type: 'SET-USERS', users } as const);
export const setCurrentPageAC = (currentPage: number) =>
    ({ type: 'SET-CURRENT-PAGE', currentPage } as const);
export const setTotalUsersCountAC = (totalUsersCount: number) =>
    ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const);
export const toggleIsFetchingAC = (isFetching: boolean) =>
    ({ type: 'TOGGLE-IS-FETCHING', isFetching } as const);

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
            return { ...state, users: [ ...action.users ] };
        case 'SET-CURRENT-PAGE':
            return { ...state, currentPage: action.currentPage };
        case 'SET-TOTAL-USERS-COUNT':
            return { ...state, totalUsersCount: action.totalUsersCount };
        case 'TOGGLE-IS-FETCHING':
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
};

export default usersReducer;