import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import EditRecipe from './pages/EditRecipe';
import Login from './pages/Login';
import MyRecipes from './pages/MyRecipes';
import NewRecipe from './pages/NewRecipe';
import Recipes from './pages/Recipes';
import ViewRecipe from './pages/ViewRecipe';

const MainRoutes = ({ dispatch, userAuth }) => (
  <Switch>
    {console.log('AQUI LOCAL:', localStorage.getItem('isLogged'))}
    {console.log('AQUI: ', userAuth.isLogged)}

    <Route exact path="/">
      {!userAuth.isLogged ? (
        <Login dispatch={dispatch} />
      ) : (
        <Redirect to="/receitas" />
      )}
    </Route>

    <Route path="/receitas">
      {userAuth.isLogged ? <Recipes /> : <Redirect to="/" />}
    </Route>

    <Route path="/minhas-receitas">
      {userAuth.isLogged ? <MyRecipes /> : <Redirect to="/" />}
    </Route>

    <Route path="/ver-receita">
      {userAuth.isLogged ? <ViewRecipe /> : <Redirect to="/" />}
    </Route>

    <Route path="/adicionar-receita">
      {userAuth.isLogged ? <NewRecipe /> : <Redirect to="/" />}
    </Route>

    <Route path="/editar-receita">
      {userAuth.isLogged ? (
        <EditRecipe dispatch={dispatch} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  </Switch>
);

export default MainRoutes;
