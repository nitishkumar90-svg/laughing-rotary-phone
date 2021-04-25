import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import { MainContext } from './Context/mainContext';

ReactDOM.render(
    <MainContext>
        <App />
    </MainContext>
    , document.getElementById('root'))