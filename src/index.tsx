import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import {
    addMessage, addPost, state, subscribe, updateCurrentMessageText,
    updateCurrentPostText
} from './redux/state';

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addMessage={ addMessage } addPost={ addPost }
                 updateCurrentMessageText={ updateCurrentMessageText }
                 updateCurrentPostText={ updateCurrentPostText } />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderEntireTree();

subscribe(renderEntireTree);