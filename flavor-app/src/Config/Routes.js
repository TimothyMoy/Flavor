import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from '../Components/Home/Home';
import RecipesList from '../Components/RecipesList/RecipesList';
import Login from '../Components/Login/Login';
import Profile from '../Components/Profile/Profile';
import Recipe from '../Components/Recipe/Recipe';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/recipes' component={ RecipesList } />
    <Route path='/login' component={ Login } />
    <Route path='/profile' component={ Profile } />
    <Route path='/recipe' component={ Recipe } />
  </Switch>
);