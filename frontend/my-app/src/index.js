import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sign from './Sign'
ReactDOM.render(
  // <div className="App">
  // <h1>antd version: {version}</h1>
  // <DatePicker />
  // <Button type="primary" style={{ marginLeft: 8 }}>
  // Primary Button
  // </Button>
  // </div>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
