import { createSelector } from 'reselect'
import { ProfileType } from 'api/socialNetworkAPI'
import { AppStateType } from 'state/store'
import { PostType } from 'state/reducers/profileReducer'

// selectors
const getProfileSelector = (state: AppStateType) => state.profilePage.profile
const getStatusSelector = (state: AppStateType) => state.profilePage.status
const getUserIdSelector = (state: AppStateType) => state.profilePage.profile.userId
const getPostsDataSelector = (state: AppStateType) => state.profilePage.postsData

// selectors with reselect
export const getProfile = createSelector(getProfileSelector, (profile: ProfileType) => profile)
export const getStatus = createSelector(getStatusSelector, (status: string) => status)
export const getUserId = createSelector(getUserIdSelector, (userId: number) => userId)
export const getPostsData = createSelector(
    getPostsDataSelector,
    (postsData: PostType[]) => postsData,
)
