import React from 'react';
import ReacDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App.js';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
    );

ReacDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,
    document.querySelector("#root")
);