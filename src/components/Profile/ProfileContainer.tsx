import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { ProfileType } from 'api'
import { AppStateType } from 'state/store'
import {
    getUserProfile,
    getUserStatus,
    sendPhoto,
    updateProfile,
    updateUserStatus,
} from 'state/reducers/profileReducer'
import { getProfile, getStatus } from 'state/selectors/profileSelectors'
import { getAuthUserId, getIsAuth } from 'state/selectors/authSelectors'
import { Profile } from './index'
import { ProfileDataFormType } from 'components/Profile/ProfileInfo/ProfileDataForm'

class ProfileContainer extends Component<ProfilePropsType> {
    refreshProfile() {
        let { userId } = this.props.match.params

        if (!userId) {
            if (!this.props.authorizedUserId) {
                this.props.history.push('/login')
                return
            }

            userId = String(this.props.authorizedUserId)
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: ProfilePropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
})

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        sendPhoto,
        updateProfile,
    }),
    withRouter,
)(ProfileContainer)

// types
type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string) => void
    sendPhoto: (file: File) => void
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
}
type PathParamsType = {
    userId: string
}
type ownProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
export type ProfilePropsType = RouteComponentProps<PathParamsType> & ownProfileContainerPropsType
