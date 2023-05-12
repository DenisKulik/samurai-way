import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import store, { StoreType } from './redux/reduxStore';
import StoreContext from './StoreContext';

const renderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <HashRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </HashRouter>,
        document.getElementById('root')
    );
};

renderEntireTree(store);

store.subscribe(() => renderEntireTree(store));