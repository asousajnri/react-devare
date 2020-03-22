import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EditRecipe from './pages/EditRecipe';
import Login from './pages/Login';
import MyRecipes from './pages/MyRecipes';
import NewRecipe from './pages/NewRecipe';
import Recipes from './pages/Recipes';
import ViewRecipe from './pages/ViewRecipe';

const MainRoutes = ({ dispatch }) => (
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
    <Route exact path="/editar-receita">
      <EditRecipe />
    </Route>
  </Switch>
);

export default MainRoutes;
