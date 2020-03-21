import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import MyRecipes from './pages/MyRecipes';
import NewRecipe from './pages/NewRecipe';
import Recipes from './pages/Recipes';
import ViewRecipe from './pages/ViewRecipe';

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
    <Route exact path="/ver-receita">
      <ViewRecipe />
    </Route>
    <Route exact path="/adicionar-receita">
      <NewRecipe />
    </Route>
  </Switch>
);

export default MainRoutes;
