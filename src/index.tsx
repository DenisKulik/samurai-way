import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import store from './redux/state';

const renderEntireTree = () => {
    ReactDOM.render(
        <HashRouter>
            <App store={ store } dispatch={ store.dispatch.bind(store) } />
        </HashRouter>,
        document.getElementById('root')
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);