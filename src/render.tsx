import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, StateType, updateCurrentPostText } from './redux/state';

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost }
                 updateCurrentPostText={ updateCurrentPostText } />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

export default renderEntireTree;

