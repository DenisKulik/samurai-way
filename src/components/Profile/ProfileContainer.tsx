import { Component, ComponentType } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Profile } from './index';
import {
    getUserProfile, InitialProfileStateType
} from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';

class ProfileContainer extends Component<ProfileContainerPropsType> {
    componentDidMount() {
        let { userId } = this.props.match.params;
        if (!userId) userId = '2';

        this.props.getUserProfile(userId);
    }

    render = () => (
        <Profile {...this.props} />
    );
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profilePage: state.profilePage,
});

export default compose<ComponentType>(
    connect(mapStateToProps, { getUserProfile }),
    withRouter
)(ProfileContainer);

// types
type MapStateToPropsType = {
    profilePage: InitialProfileStateType
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type PathParamsType = {
    userId: string
}

type ownProfileContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType>
    & ownProfileContainerPropsType