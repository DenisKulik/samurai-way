import './App.scss';
import logo from './img/logo.png';

const App = () => {
    return (
        <div className="App">
            <header>
                <img src={logo} alt="logotype" />
            </header>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <main>
                Main content
            </main>
        </div>
    );
};

export default App;
