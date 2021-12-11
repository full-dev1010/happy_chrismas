import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

var BASE_URL_LOCAL = "http://localhost:5000/api/v1";
var BASE_URL_SERVER = "https://www.compareplayerprops.com/api_xmas/api/v1";
window.BASE_URL = BASE_URL_SERVER;

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();