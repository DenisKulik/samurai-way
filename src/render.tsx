import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {
    addMessage, addPost, StateType, updateCurrentMessageText,
    updateCurrentPostText
} from './redux/state';

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addMessage={ addMessage } addPost={ addPost }
                 updateCurrentMessageText={ updateCurrentMessageText }
                 updateCurrentPostText={ updateCurrentPostText } />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

export default renderEntireTree;

