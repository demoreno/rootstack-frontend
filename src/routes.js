import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Barbecues from './containers/barbecues';
import MyBarbecues from './containers/myBarbecues';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/barbecues" component={Barbecues} />
      <Route exact path="/my-barbecues" component={MyBarbecues} />
    </Switch>
  </BrowserRouter>
);
