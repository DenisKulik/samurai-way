import { createSelector } from 'reselect'
import { ProfileType } from 'api/socialNetworkAPI'
import { AppStateType } from 'redux/store'

// selectors
const getProfileSelector = (state: AppStateType) => state.profilePage.profile
const getStatusSelector = (state: AppStateType) => state.profilePage.status
const getUserIdSelector = (state: AppStateType) => state.profilePage.profile.userId

// selectors with reselect
export const getProfile = createSelector(getProfileSelector, (profile: ProfileType) => profile)
export const getStatus = createSelector(getStatusSelector, (status: string) => status)
export const getUserId = createSelector(getUserIdSelector, (userId: number) => userId)
