import { Redirect, Route, useHistory } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { ActionsTypes, StateType } from './redux/reduxStore';
import React from 'react';

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    const history = useHistory();
    React.useEffect(() => {
        history.push('/profile');
    }, [ history ]);

    const { state, dispatch } = props;
    const { postsData, newPostText } = state.profile;
    const { dialogsData, messagesData, newMessageText } = state.messages;

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Route exact path="/"><Redirect to="/profile" /></Route>
                <Route path="/profile" render={() => (
                    <Profile
                        postsData={postsData}
                        newPostText={newPostText}
                        dispatch={dispatch}
                    />
                )} />
                <Route path="/dialogs" render={() => (
                    <Dialogs
                        dialogsData={dialogsData}
                        messagesData={messagesData}
                        newMessageText={newMessageText}
                        dispatch={dispatch}
                    />
                )} />
            </div>
        </div>
    );
};

export default App;
