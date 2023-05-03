import { Redirect, Route, useHistory } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { ActionsTypes, StoreType } from './redux/state';
import React from 'react';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    const history = useHistory();
    React.useEffect(() => {
        history.push('/profile');
    }, [ history ]);

    const { store, dispatch } = props;
    const { postsData, newPostText } = store.getState().profile;
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
                <Route path="/profile" render={ () => (
                    <Profile
                        postsData={ postsData }
                        newPostText={ newPostText }
                        dispatch={ dispatch }
                    />
                ) } />
                <Route path="/dialogs" render={ () => (
                    <Dialogs
                        dialogsData={ dialogsData }
                        messagesData={ messagesData }
                        newMessageText={ newMessageText }
                        dispatch={ dispatch }
                    />
                ) } />
            </div>
        </div>
    );
};

export default App;
