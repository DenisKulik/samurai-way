import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './index';
import { AppStateType } from '../../redux/reduxStore';
import {
    InitialAuthUserDataStateType, ResponseAuthUserDataType, setUserData
} from '../../redux/authReducer';
import { socialNetworkAPI } from '../../api/socialNetworkAPI';

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
        socialNetworkAPI
            .getAuthUser()
            .then(data => data.resultCode === 0 &&
                this.props.setUserData(data.data));
    }

    render = () => (
        <Header {...this.props} />
    );
}

export default connect(mapStateToProps, { setUserData })(HeaderContainer);