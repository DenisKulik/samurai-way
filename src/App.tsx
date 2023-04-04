import './App.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dialogs from './components/Dialogs';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Sidebar />
            {/*<Profile />*/ }
            <Dialogs />
        </div>
    );
};

export default App;
