import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './index';
import { AppStateType } from '../../redux/reduxStore';
import { InitialAuthUserDataStateType, logout } from '../../redux/authReducer';

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    auth: state.auth
});

class HeaderContainer extends Component<HeaderContainerPropsType> {
    render = () => (
        <Header {...this.props} />
    );
}

export default connect(mapStateToProps, { logout })(
    HeaderContainer);

// types
export type HeaderContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    auth: InitialAuthUserDataStateType
}

type MapDispatchToPropsType = {
    logout: () => void
}