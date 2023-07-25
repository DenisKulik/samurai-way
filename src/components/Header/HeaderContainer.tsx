import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Header from './index'
import { AppStateType } from 'redux/store'
import { logout } from 'redux/authReducer'
import { getIsAuth, getUserLogin } from 'redux/authSelectors'

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: getUserLogin(state),
    isAuth: getIsAuth(state),
})

class HeaderContainer extends PureComponent<HeaderContainerPropsType> {
    render = () => <Header {...this.props} />
}

export default connect(mapStateToProps, { logout })(HeaderContainer)

// types
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    logout: () => void
}
