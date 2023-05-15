import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import store, { StoreType } from './redux/reduxStore';
import { Provider } from 'react-redux';

const renderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store);

store.subscribe(() => renderEntireTree(store));