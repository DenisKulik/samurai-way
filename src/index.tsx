import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import store, { StateType } from './redux/reduxStore';

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </HashRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());

store.subscribe(() => renderEntireTree(store.getState()));