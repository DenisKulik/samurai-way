import { createSelector } from 'reselect'

import { UserType } from 'api/socialNetworkAPI'
import { AppStateType } from 'state/store'

// selectors
const getUsersSelector = (state: AppStateType) => state.users.users
const getPageSizeSelector = (state: AppStateType) => state.users.pageSize
const getTotalUsersCountSelector = (state: AppStateType) => state.users.totalUsersCount
const getCurrentPageSelector = (state: AppStateType) => state.users.currentPage
const getIsFollowingInProgressSelector = (state: AppStateType) => state.users.isFollowingInProgress
export const getIsFetchingSelector = (state: AppStateType) => state.users.isFetching

// selectors with reselect
export const getUsers = createSelector(getUsersSelector, (users: UserType[]) => users)
export const getPageSize = createSelector(getPageSizeSelector, (pageSize: number) => pageSize)
export const getTotalUsersCount = createSelector(
    getTotalUsersCountSelector,
    (totalUsersCount: number) => totalUsersCount,
)
export const getCurrentPage = createSelector(
    getCurrentPageSelector,
    (currentPage: number) => currentPage,
)
export const getIsFollowingInProgress = createSelector(
    getIsFollowingInProgressSelector,
    (isFollowingInProgress: number[]) => isFollowingInProgress,
)
export const getIsFetching = createSelector(
    getIsFetchingSelector,
    (isFetching: boolean) => isFetching,
)
