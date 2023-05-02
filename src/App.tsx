import { Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { ActionType, StoreType } from './redux/state';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

const App = (props: AppPropsType) => {
    const { store, dispatch } = props;
    const { postsData, currentPostText } = store.getState().profile;
    const {
        dialogsData,
        messagesData,
        currentMessageText
    } = store.getState().messages;

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Route path="/profile" render={ () => (
                    <Profile
                        postsData={ postsData }
                        currentPostText={ currentPostText }
                        dispatch={ dispatch }
                    />
                ) } />
                <Route path="/dialogs" render={ () => (
                    <Dialogs
                        dialogsData={ dialogsData }
                        messagesData={ messagesData }
                        currentMessageText={ currentMessageText }
                        dispatch={ dispatch }
                    />
                ) } />
            </div>
        </div>
    );
};

export default App;
