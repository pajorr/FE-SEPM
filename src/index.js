import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from "./_helpers/store";
import { App } from "./components/app/App";
import * as serviceWorker from './serviceWorker';
import ButtonAppBar from "./components/toolbar/Toolbar";

ReactDOM.render(
    <Provider store={store}>
        <ButtonAppBar/>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();