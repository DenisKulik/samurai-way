import { createSelector } from 'reselect'
import { UserType } from 'api/socialNetworkAPI'
import { AppStateType } from 'redux/store'

// selectors
const getUsersSelector = (state: AppStateType) => state.usersPage.users
const getPageSizeSelector = (state: AppStateType) => state.usersPage.pageSize
const getTotalUsersCountSelector = (state: AppStateType) => state.usersPage.totalUsersCount
const getCurrentPageSelector = (state: AppStateType) => state.usersPage.currentPage
const getIsFollowingInProgressSelector = (state: AppStateType) =>
    state.usersPage.isFollowingInProgress
export const getIsFetchingSelector = (state: AppStateType) => state.usersPage.isFetching

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
