import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const root = document.getElementById('root');

const reducer = (state, action) => {
    if (action.type === 'PLUS') {
        return state + 1;
    }
    if (action.type === 'MINUS') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return state = 0;
    }
    return 0;
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
