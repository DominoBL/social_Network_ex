import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import store from "./Redux/redux-store.ts";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";


    ReactDOM.render(
      
        <React.StrictMode>
            <Router>
            <Provider store={store}>
            <App /> 
            </Provider>
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
