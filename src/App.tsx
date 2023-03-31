import './App.scss';
import Index from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';

const App = () => {
    return (
        <div className="App">
            <Index />
            <Sidebar />
            <Profile />
        </div>
    );
};

export default App;
