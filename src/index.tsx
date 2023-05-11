import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Store } from 'redux';
import App from './App';
import './index.scss';
import store, { ActionsTypes, StateType } from './redux/reduxStore';

const renderEntireTree = (store: Store<StateType, ActionsTypes>) => {
    ReactDOM.render(
        <HashRouter>
            <App store={store} />
        </HashRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store);

store.subscribe(() => renderEntireTree(store));