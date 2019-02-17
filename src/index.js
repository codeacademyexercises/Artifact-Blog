import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Components/Routes/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import blogPostReactionUpdate from './reducers/reducers';
const store = createStore(blogPostReactionUpdate,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
    <Routes />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

