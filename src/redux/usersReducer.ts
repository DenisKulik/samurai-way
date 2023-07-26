import { AppThunkDispatch, AppThunkType } from 'redux/store'
import { ResponseType, usersAPI, UserType } from 'api/socialNetworkAPI'

const initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
}

export const usersReducer = (
    state: InitialUsersStateType = initialState,
    action: UsersActionsType,
): InitialUsersStateType => {
    switch (action.type) {
        case 'USERS/SET-USERS':
            return { ...state, users: [...action.users] }
        case 'USERS/SET-CURRENT-PAGE':
            return { ...state, currentPage: action.currentPage }
        case 'USERS/TOGGLE-FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.userId ? { ...user, followed: action.isFollow } : user,
                ),
            }
        case 'USERS/SET-TOTAL-USERS-COUNT':
            return { ...state, totalUsersCount: action.totalUsersCount }
        case 'USERS/TOGGLE-IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId),
            }
        default:
            return state
    }
}

// actions
export const setUsers = (users: UserType[]) => ({ type: 'USERS/SET-USERS', users }) as const
export const toggleFollowUser = (userId: number, isFollow: boolean) =>
    ({ type: 'USERS/TOGGLE-FOLLOW-USER', userId, isFollow }) as const
export const setCurrentPage = (currentPage: number) =>
    ({ type: 'USERS/SET-CURRENT-PAGE', currentPage }) as const
export const setTotalUsersCount = (totalUsersCount: number) =>
    ({ type: 'USERS/SET-TOTAL-USERS-COUNT', totalUsersCount }) as const
export const toggleIsFetching = (isFetching: boolean) =>
    ({ type: 'USERS/TOGGLE-IS-FETCHING', isFetching }) as const
export const toggleIsFollowingProgress = (isFollowingInProgress: boolean, userId: number) =>
    ({ type: 'USERS/TOGGLE-IS-FOLLOWING-PROGRESS', isFollowingInProgress, userId }) as const

// thunks
export const requestUsers =
    (page: number, pageSize: number): AppThunkType =>
    async dispatch => {
        try {
            dispatch(toggleIsFetching(true))
            const res = await usersAPI.getUsers(page, pageSize)
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(toggleIsFetching(false))
        }
    }

const toggleFollowStatus = async (
    userId: number,
    toggleFollowMethod: (userId: number) => Promise<ResponseType>,
    isFollow: boolean,
    dispatch: AppThunkDispatch,
) => {
    try {
        dispatch(toggleIsFollowingProgress(true, userId))
        const res = await toggleFollowMethod(userId)
        res.resultCode === 0 && dispatch(toggleFollowUser(userId, isFollow))
    } catch (e) {
        console.error(e)
    } finally {
        dispatch(toggleIsFollowingProgress(false, userId))
    }
}

export const followUser =
    (userId: number): AppThunkType =>
    async dispatch => {
        await toggleFollowStatus(userId, usersAPI.follow, true, dispatch)
    }

export const unfollowUser =
    (userId: number): AppThunkType =>
    async dispatch => {
        await toggleFollowStatus(userId, usersAPI.unfollow, false, dispatch)
    }

// types
export type InitialUsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: number[]
}
export type UsersActionsType =
    | ReturnType<typeof setUsers>
    | ReturnType<typeof toggleFollowUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>
