import { PureComponent, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Profile } from './index'
import { getUserProfile, getUserStatus, updateUserStatus } from 'redux/profileReducer'
import { AppStateType } from 'redux/store'
import { ProfileType } from 'api/socialNetworkAPI'
import { getProfile, getStatus } from 'redux/profileSelectors'
import { getAuthUserId, getIsAuth } from 'redux/authSelectors'

class ProfileContainer extends PureComponent<ProfileContainerPropsType> {
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

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render = () => <Profile {...this.props} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
})

export default compose<ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
)(ProfileContainer)

// types
type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string) => void
}
type PathParamsType = {
    userId: string
}
type ownProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
    ownProfileContainerPropsType
