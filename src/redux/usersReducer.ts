import { ActionsTypes } from './reduxStore';

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
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress ?
                    [ ...state.isFollowingInProgress, action.userId ] :
                    state.isFollowingInProgress.filter(
                        id => id !== action.userId)
            };
        default:
            return state;
    }
};

// actions
export const followUser = (userId: number) =>
    ({ type: 'FOLLOW', userId } as const);
export const unfollowUser = (userId: number) =>
    ({ type: 'UNFOLLOW', userId } as const);
export const setUsers = (users: UserType[]) =>
    ({ type: 'SET-USERS', users } as const);
export const setCurrentPage = (currentPage: number) =>
    ({ type: 'SET-CURRENT-PAGE', currentPage } as const);
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({ type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const);
export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: 'TOGGLE-IS-FETCHING', isFetching } as const);
export const toggleIsFollowingProgress = (
    isFollowingInProgress: boolean,
    userId: number
) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isFollowingInProgress,
    userId
} as const);

// types
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
    isFollowingInProgress: number[]
};

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
};

export default usersReducer;