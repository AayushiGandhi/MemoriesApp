import React from 'react';
import Reactdom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//provider keeps track of the redux store which is global state 

import App from './App';
import reducers from './reducers';

//creating store
const store = createStore(reducers, compose(applyMiddleware(thunk)))

Reactdom.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'));