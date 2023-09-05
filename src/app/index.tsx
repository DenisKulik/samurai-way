import { Component, ComponentType, lazy } from 'react'
import { compose } from 'redux'
import { connect, Provider } from 'react-redux'
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'

import styles from 'app/app.module.scss'
import HeaderContainer from 'components/header/header-container'
import { Sidebar } from 'components/sidebar'
import { initializeApp } from 'state/reducers/app.reducer'
import { AppStateType, store } from 'state/store'
import { Preloader } from 'components/common/preloader'
import { getInitialized } from 'state/selectors/app.selectors'
import { withSuspense } from 'hoc'

const Login = lazy(() => import('components/login'))
const ProfileContainer = lazy(() => import('components/profile/profile-container'))
const MessagesContainer = lazy(() => import('components/messages/messages-container'))
const UsersContainer = lazy(() => import('components/users/users-container'))

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className={styles.app}>
                <HeaderContainer />
                <Sidebar />
                <div className={styles.content}>
                    <Switch>
                        <Redirect exact from="/" to="/profile" />
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                        <Route path="/dialogs" render={withSuspense(MessagesContainer)} />
                        <Route
                            path="/users"
                            render={withSuspense(() => (
                                <UsersContainer />
                            ))}
                        />
                        <Route path="/login" render={withSuspense(Login)} />
                        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mstp = (state: AppStateType) => ({ initialized: getInitialized(state) })
const AppContainer = compose<ComponentType>(withRouter, connect(mstp, { initializeApp }))(App)

export const RootComponent = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}

// types
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
