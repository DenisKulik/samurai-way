import { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Profile } from './index';
import {
    getUserProfile, getUserStatus, updateUserStatus
} from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';
import { ProfileType } from '../../api/socialNetworkAPI';

class ProfileContainer extends Component<ProfileContainerPropsType> {
    componentDidMount() {
        let { userId } = this.props.match.params;
        if (!userId) userId = '2';

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render = () => (
        <Profile {...this.props} />
    );
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose<ComponentType>(
    connect(mapStateToProps,
        { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter
)(ProfileContainer);

// types
type MapStateToPropsType = {
    profile: ProfileType
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type ownProfileContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType>
    & ownProfileContainerPropsType