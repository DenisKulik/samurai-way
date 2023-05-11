import { Redirect, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Store } from 'redux';
import './App.scss';
import { ActionsTypes, StateType } from './redux/reduxStore';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import DialogsContainer from './components/Dialogs/DialogContainer';

type AppPropsType = {
    store: Store<StateType, ActionsTypes>
}

const App = ({ store }: AppPropsType) => {
    const history = useHistory();
    useEffect(() => history.push('/profile'), [ history ]);

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Route exact path="/"><Redirect to="/profile" /></Route>
                <Route path="/profile" render={() => (
                    <Profile store={store} />
                )} />
                <Route path="/dialogs" render={() => (
                    <DialogsContainer store={store} />
                )} />
            </div>
        </div>
    );
};

export default App;
