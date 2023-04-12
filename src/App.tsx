import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';
import { StateType } from './redux/state';

type AppPropsType = {
    state: StateType
}

const App = (props: AppPropsType) => {
    const { dialogsData, messagesData } = props.state.messages;
    const { postsData } = props.state.profile;

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
