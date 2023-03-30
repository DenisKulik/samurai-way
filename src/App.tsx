import './App.scss';
import logo from './img/logo.png';
import background from './img/background.jpg';
import user from './img/user.jpg';


const App = () => {
    return (
        <div className="App">
            <header className="header">
                <img className="logo-img" src={logo} alt="logotype" />
            </header>
            <nav className="sidebar">
                <ul className="nav">
                    <li className="navItem"><a href="#">Profile</a></li>
                    <li className="navItem"><a href="#">Messages</a></li>
                    <li className="navItem"><a href="#">News</a></li>
                    <li className="navItem"><a href="#">Music</a></li>
                    <li className="navItem"><a href="#">Settings</a></li>
                </ul>
            </nav>
            <main className="content">
                <div>
                    <div>
                        <img className="backgroundImage" src={background}
                             alt="background" />
                    </div>
                    <div className="userInfo">
                        <img className="userImg" src={user} alt="user" />
                        <h2 className="username">Martin S.</h2>
                    </div>
                    <div>
                        <h3>My posts</h3>
                        <div>
                            New post
                        </div>
                        <div>
                            <div>
                                post 1
                            </div>
                            <div>
                                post 2
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default App;
