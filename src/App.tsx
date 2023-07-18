import { Redirect, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login';

const App = () => {
    const history = useHistory();
    useEffect(() => history.push('/profile'), [ history ]);

    return (
        <div className="App">
            <HeaderContainer />
            <Sidebar />
            <div className="content">
                <Route exact path="/"><Redirect to="/profile" /></Route>
                <Route path="/login" render={() => <Login />} />
                <Route
                    path="/profile/:userId?"
                    render={() => <ProfileContainer />}
                />
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
            </div>
        </div>
    );
};

export default App;
