import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import reducerlang from './redux/reduceer/changelang'
import navbarReducer from './redux/reduceer/navbarReducer'
import changeEDCreducer from './redux/reduceer/changeEDCreducer'
let store = createStore(combineReducers({reducerlang,navbarReducer,changeEDCreducer}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/***************************/
axios.interceptors.request.use(request=>{
  request.headers={'Content-Type': 'application/json','authorization':`Bearer ${localStorage.getItem('token')}`}
  
  return request
},error=>{
  return Promise.reject(error)
})
/************************************* */
axios.interceptors.response.use(response=>{

  return response
},error=>{
  return Promise.reject(error)
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
