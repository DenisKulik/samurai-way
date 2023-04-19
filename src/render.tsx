import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, StateType } from './redux/state';

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={ state } addPost={ addPost } />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

export default renderEntireTree;

