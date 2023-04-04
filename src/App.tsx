import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';
import Profile from './components/Profile';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Sidebar />
                <div className="content">
                    <Route path="/profile" component={ Profile } />
                    <Route path="/dialogs" component={ Dialogs } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
