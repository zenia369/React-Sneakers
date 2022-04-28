import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/const.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);
