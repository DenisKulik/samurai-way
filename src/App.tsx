import { Redirect, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Store } from 'redux';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { ActionsTypes, StateType } from './redux/reduxStore';

type AppPropsType = {
    store: Store<StateType, ActionsTypes>
}

const App = ({ store }: AppPropsType) => {
    const history = useHistory();
    useEffect(() => history.push('/profile'), [ history ]);

    const {
        dialogsData,
        messagesData,
        newMessageText
    } = store.getState().messages;

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
                    <Dialogs
                        dialogsData={dialogsData}
                        messagesData={messagesData}
                        newMessageText={newMessageText}
                        dispatch={store.dispatch.bind(store)}
                    />
                )} />
            </div>
        </div>
    );
};

export default App;
