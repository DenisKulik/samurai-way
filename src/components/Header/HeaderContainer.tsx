import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Header from './index'
import { AppStateType } from 'state/store'
import { logout } from 'state/reducers/authReducer'
import { getIsAuth, getUserLogin } from 'state/selectors/authSelectors'

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
    isAuth: boolean | null
}

type MapDispatchToPropsType = {
    logout: () => void
}
