import { Component } from 'react';
import { connect } from 'react-redux';
import { Profile } from './index';
import axios from 'axios';
import {
    InitialProfileStateType, ProfileType, setUserProfile
} from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';

export type ProfileContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    profilePage: InitialProfileStateType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`)
             .then(response => {
                 this.props.setUserProfile(response.data);
             });
    }

    render = () => (
        <Profile {...this.props} />
    );
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profilePage: state.profilePage
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);