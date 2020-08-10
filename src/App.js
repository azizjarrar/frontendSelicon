import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home'
import Login from './components/login/login'
import Product from './components/Product/Product'
import Admin from './components/admin/admin'
import './App.css';

function App() {
  return (
      <Switch>
       <Route exact path='/product/Silicone' render={(props)=><Product routerProps={props} />}/>
       <Route exact path='/product/Caoutchouc' render={(props)=><Product routerProps={props} />}/>
       
       <Route exact path='/login' render={(props)=><Login routerProps={props} />}/>
       <Route exact path='/'      render={(props)=><Home routerProps={props} />}/>
       {(localStorage.getItem('role')==='admin')&&<Route exact path='/admin'      render={(props)=><Admin routerProps={props} />}/>}
      </Switch>
  );
}

export default App;
