import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';


const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/abc' component={Home}/>
    </Switch>
)

export default Main;
