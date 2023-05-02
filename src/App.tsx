import { Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { StoreType } from './redux/state';

type AppPropsType = { store: StoreType }

const App = (props: AppPropsType) => {
    const { store } = props;
    const {
        dialogsData,
        messagesData,
        currentMessageText
    } = store.getState().messages;
    const {
        postsData,
        currentPostText
    } = store.getState().profile;
    const {
        addMessage,
        addPost,
        updateCurrentMessageText,
        updateCurrentPostText
    } = store;

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Route path="/profile" render={ () => (
                    <Profile
                        postsData={ postsData }
                        currentPostText={ currentPostText }
                        addPost={ addPost.bind(store) }
                        updateCurrentPostText={ updateCurrentPostText.bind(
                            store) } />
                ) } />
                <Route path="/dialogs" render={ () => (
                    <Dialogs
                        dialogsData={ dialogsData }
                        messagesData={ messagesData }
                        currentMessageText={ currentMessageText }
                        addMessage={ addMessage.bind(store) }
                        updateCurrentMessageText={ updateCurrentMessageText.bind(
                            store) } />
                ) } />
            </div>
        </div>
    );
};

export default App;
