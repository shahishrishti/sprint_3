import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import routeReducer from './reducers/route_reducer';
import vehicleReducer from './reducers/vehicle_reducer';
import driverReducer from './reducers/driver_reducer';
import bookingReducer from './reducers/booking_reducer';
import placeReducer from './reducers/place_reducer';
import vehicletypeReducer from './reducers/vehicletype_reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import userReducer from './reducers/user_reducer';

let allReducers = combineReducers({'vehicleReducer':vehicleReducer,'routeReducer':routeReducer,  'driverReducer':driverReducer, 'bookingReducer':bookingReducer, 'placeReducer':placeReducer, 'vehicletypeReducer':vehicletypeReducer, 'userReducer':userReducer});
let store = createStore(allReducers, applyMiddleware(ReduxThunk));

store.subscribe(()=>console.log('Current State: ', store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App store={store}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
