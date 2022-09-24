import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

//REDUX IMPORTS

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// REDUX RECUCERS GO HERE
const feedbackReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FEELING_INPUT':
            return { ...state, feeling: action.payload };
        case 'UNDERSTANDING_INPUT':
            return { ...state, understanding: action.payload };
        case 'SUPPORT_INPUT':
            return { ...state, support: action.payload };
        case 'COMMENTS_INPUT':
            return { ...state, comments: action.payload };
    }
    return state;
};


// SET UP THE STORE
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
);



ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
