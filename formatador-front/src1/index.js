import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cadastro from './Cadastro';
import Login from './Login';
import Navbar from './Navbar';
import Tutorial from './Tutorial.js';
import Formatador from './Formatador.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Cadastro /> */}
    {/* <Login/> */}
    {/* <Navbar/> */}
    <Tutorial/>
    {/* <Formatador/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();