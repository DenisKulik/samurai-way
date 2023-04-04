import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            <div className="content">
                {/*hide profile*/ }
                {/*hide profile*/ }
                {/*<Profile />*/ }
                <Dialogs />
            </div>
        </div>
    );
};

export default App;
