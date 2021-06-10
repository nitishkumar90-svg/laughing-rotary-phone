import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom';
import './css/index.css'   
import App from './components/App'
import { MainContext } from './Context/mainContext';

ReactDOM.render(
    <HashRouter>
        <MainContext>
            <App />
        </MainContext>
    </HashRouter>
    , document.getElementById('root'))