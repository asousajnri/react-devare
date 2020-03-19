import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Recipes from './pages/Recipes';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route exact path="/recipes">
      <Recipes />
    </Route>
  </Switch>
);

export default MainRoutes;
