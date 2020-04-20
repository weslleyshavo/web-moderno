import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculador from './main/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculador />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

