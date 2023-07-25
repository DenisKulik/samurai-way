import { PureComponent, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Profile } from './index'
import { getUserProfile, getUserStatus, updateUserStatus } from 'redux/profileReducer'
import { AppStateType } from 'redux/store'
import { ProfileType } from 'api/socialNetworkAPI'
import { getProfile, getStatus, getUserId } from 'redux/profileSelectors'
import { getIsAuth } from 'redux/authSelectors'

class ProfileContainer extends PureComponent<ProfileContainerPropsType> {
    componentDidMount() {
        let { userId } = this.props.match.params
        if (!userId) {
            userId = String(this.props.authorizedUserId)

            if (userId === 'undefined') return
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render = () => <Profile {...this.props} />
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
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
    authorizedUserId: number | undefined
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
