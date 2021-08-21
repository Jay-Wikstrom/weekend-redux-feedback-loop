import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';

const mainReducer = (state = [], action) => {
    if (action.type === 'SET_FEELING'){
        return action.payload
    }
    if (action.type === 'SET_UNDERSTANDING') {
        return [...state, action.payload]
    }
    if (action.type === 'SET_SUPPORT') {
        return [...state, action.payload]
    }
    if (action.type === 'SET_COMMENTS') {
        return [...state, action.payload]
    }
    if (action.type === 'CLEAR_FEEDBACK'){
        return [];
    }
    return state;
}





const storeInstance = createStore(
    combineReducers({
        mainReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
