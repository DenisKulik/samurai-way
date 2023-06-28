import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './index';
import { AppStateType } from '../../redux/reduxStore';
import {
    InitialAuthUserDataStateType, ResponseAuthUserDataType, setUserData
} from '../../redux/authReducer';

export type HeaderContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    auth: InitialAuthUserDataStateType
}

type MapDispatchToPropsType = {
    setUserData: (data: ResponseAuthUserDataType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
});

class HeaderContainer extends Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
             .then((response) => {
                 if (response.data.resultCode === 0) {
                     this.props.setUserData(response.data.data);
                 }
             });
    }

    render = () => (
        <Header {...this.props} />
    );
}

export default connect(mapStateToProps, { setUserData })(HeaderContainer);