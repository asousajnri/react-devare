import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import MyRecipes from './pages/MyRecipes';
import Recipes from './pages/Recipes';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route exact path="/receitas">
      <Recipes />
    </Route>
    <Route exact path="/minhas-receitas">
      <MyRecipes />
    </Route>
  </Switch>
);

export default MainRoutes;
