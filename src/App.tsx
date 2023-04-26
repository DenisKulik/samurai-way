import { Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { StateType } from './redux/state';

type AppPropsType = {
    state: StateType
    addMessage: () => void
    addPost: () => void
    updateCurrentMessageText: (currentMessage: string) => void
    updateCurrentPostText: (currentPost: string) => void
}

const App = (props: AppPropsType) => {
    const {
        dialogsData,
        messagesData,
        currentMessageText
    } = props.state.messages;
    const { postsData, currentPostText } = props.state.profile;
    const {
        addMessage,
        addPost,
        updateCurrentMessageText,
        updateCurrentPostText
    } = props;

    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                <Route path="/profile" render={ () => (
                    <Profile postsData={ postsData }
                             currentPostText={ currentPostText }
                             addPost={ addPost }
                             updateCurrentPostText={ updateCurrentPostText } />
                ) } />
                <Route path="/dialogs" render={ () => (
                    <Dialogs dialogsData={ dialogsData }
                             messagesData={ messagesData }
                             currentMessageText={ currentMessageText }
                             addMessage={ addMessage }
                             updateCurrentMessageText={ updateCurrentMessageText } />
                ) } />
            </div>
        </div>
    );
};

export default App;
