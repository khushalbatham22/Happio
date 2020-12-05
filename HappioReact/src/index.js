import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';
import './styles/styles.css'
import './styles/custom.css'
import './styles/owl.carousel.css'


ReactDOM.render( 
    <BrowserRouter>
        <App />    
    </BrowserRouter>,
     document.getElementById('root')
);

reportWebVitals();