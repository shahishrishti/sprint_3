import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import routeReducer from './reducers/route_reducer';
import vehicleReducer from './reducers/vehicle_reducer';
import driverReducer from './reducers/driver_reducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


let allReducers = combineReducers({'routeReducer':routeReducer, 'vehicleReducer':vehicleReducer, 'driverReducer':driverReducer});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
