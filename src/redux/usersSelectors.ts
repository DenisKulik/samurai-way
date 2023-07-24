import { AppStateType } from './reduxStore'

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.isFollowingInProgress
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
