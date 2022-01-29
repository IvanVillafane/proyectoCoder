import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const express = require ("express");
const app = express ();
const port = process.env.PORT || 4000;
app.listen(port);
app.get("/",(req, res, )=>{res.send("la pagina Inicio");});
console.log( `Listen on Port ${port}`);
module.exports = (req, res) => {
  res.status(404).json({ message: 'Not Found' });
};
reportWebVitals();

