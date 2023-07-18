import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './index';
import { AppStateType } from '../../redux/reduxStore';
import {
    getAuthUser, InitialAuthUserDataStateType, logout
} from '../../redux/authReducer';

export type HeaderContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    auth: InitialAuthUserDataStateType
}

type MapDispatchToPropsType = {
    getAuthUser: () => void
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
});

class HeaderContainer extends Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUser();
    }

    render = () => (
        <Header {...this.props} />
    );
}

export default connect(mapStateToProps, { getAuthUser, logout })(
    HeaderContainer);