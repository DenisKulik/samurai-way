import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import store from './redux/state';

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={ store } dispatch={ store.dispatch.bind(store) } />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);