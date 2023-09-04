import { Component, ComponentType, lazy } from 'react'
import { compose } from 'redux'
import { connect, Provider } from 'react-redux'
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'

import './App.scss'
import HeaderContainer from 'components/Header/HeaderContainer'
import Sidebar from 'components/Sidebar'
import { initializeApp } from 'state/reducers/appReducer'
import { AppStateType, store } from 'state/store'
import { Preloader } from 'components/common/Preloader'
import { getInitialized } from 'state/selectors/appSelectors'
import { withSuspense } from 'hoc/withSuspense'

const Login = lazy(() => import('components/Login'))
const ProfileContainer = lazy(() => import('components/Profile/ProfileContainer'))
const DialogsContainer = lazy(() => import('components/Messages/MessagesContainer'))
const UsersContainer = lazy(() => import('components/Users/UsersContainer'))

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className="App">
                <HeaderContainer />
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Redirect exact from="/" to="/profile" />
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
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
