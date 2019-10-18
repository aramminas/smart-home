import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './css/style_old.css';
// import './css/style.css';

import './css/global.css';
//our page
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider as BusProvider } from 'react-bus';


ReactDOM.render(
    <BrowserRouter>
        <BusProvider>
            <App />
        </BusProvider>
    </BrowserRouter>
    , document.getElementById('root'));
