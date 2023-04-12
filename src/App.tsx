import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { DialogType, MessageType, PostType } from './index';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';

type AppPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    postsData: PostType[]
}

const App = (props: AppPropsType) => {
    const { dialogsData, messagesData, postsData } = props;

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Sidebar />
                <div className="content">
                    <Route path="/profile" render={ () => (
                        <Profile postsData={ postsData } />
                    ) } />
                    <Route path="/dialogs" render={ () => (
                        <Dialogs dialogsData={ dialogsData }
                                 messagesData={ messagesData } />
                    ) } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
