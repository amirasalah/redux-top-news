import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchPosts } from './actions';

const store = createStore(
    rootReducer, applyMiddleware(thunk)
);
// store.dispatch(fetchPosts())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));