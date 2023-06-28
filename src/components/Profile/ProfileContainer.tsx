import { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Profile } from './index';
import {
    InitialProfileStateType, ProfileType, setUserProfile
} from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';
import { socialNetworkAPI } from '../../api/socialNetworkAPI';

type MapStateToPropsType = {
    profilePage: InitialProfileStateType
}

type PathParamsType = {
    userId: string
}

type ownProfileContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType>
    & ownProfileContainerPropsType

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
    componentDidMount() {
        let { userId } = this.props.match.params;
        if (!userId) userId = '2';

        socialNetworkAPI
            .getUserProfile(userId)
            .then(data => this.props.setUserProfile(data));
    }

    render = () => (
        <Profile {...this.props} />
    );
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profilePage: state.profilePage
});

const withUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
    withUrlDataContainer);