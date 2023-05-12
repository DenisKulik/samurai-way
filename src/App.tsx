import { Redirect, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import DialogsContainer from './components/Dialogs/DialogContainer';

const App = () => {
    const history = useHistory();
    useEffect(() => history.push('/profile'), [ history ]);

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Route exact path="/"><Redirect to="/profile" /></Route>
                <Route path="/profile" render={() => (
                    <Profile />
                )} />
                <Route path="/dialogs" render={() => (
                    <DialogsContainer />
                )} />
            </div>
        </div>
    );
};

export default App;
