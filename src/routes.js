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
    <Route exact path="/">
      {!userAuth.isLogged ? (
        <Login dispatch={dispatch} />
      ) : (
        <Redirect to="/receitas" />
      )}
    </Route>
    <Route path="/receitas">
      {userAuth.isLogged ? (
        <Recipes token={userAuth.token} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
    <Route path="/minhas-receitas">
      {userAuth.isLogged ? (
        <MyRecipes userId={userAuth.id} token={userAuth.token} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
    <Route path="/:id/ver-receita">
      {userAuth.isLogged ? (
        <ViewRecipe token={userAuth.token} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
    <Route path="/adicionar-receita">
      {userAuth.isLogged ? (
        <NewRecipe
          dispatch={dispatch}
          userId={userAuth.id}
          token={userAuth.token}
        />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
    <Route path="/:id/editar-receita">
      {userAuth.isLogged ? (
        <EditRecipe dispatch={dispatch} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  </Switch>
);

export default MainRoutes;
