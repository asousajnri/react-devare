import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
  </Switch>
);

export default MainRoutes;
