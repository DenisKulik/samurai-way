import { Component, ComponentType } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import './App.scss'
import HeaderContainer from './components/Header/HeaderContainer'
import Sidebar from './components/Sidebar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogContainer'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login'
import { initializeApp } from 'redux/appReducer'
import { AppStateType } from 'redux/store'
import { Preloader } from 'components/common/Preloader'
import { getInitialized } from 'redux/appSelectors'

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render = () => {
        if (!this.props.initialized) return <Preloader />

        return (
            <div className="App">
                <HeaderContainer />
                <Sidebar />
                <div className="content">
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                </div>
            </div>
        )
    }
}

const mstp = (state: AppStateType) => ({ initialized: getInitialized(state) })

export default compose<ComponentType>(withRouter, connect(mstp, { initializeApp }))(App)

// types
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
