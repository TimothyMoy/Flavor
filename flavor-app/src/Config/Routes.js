import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from '../Components/Home/Home';
import RecipesList from '../Components/RecipesList/RecipesList';
import Profile from '../Components/Profile/Profile';
import Recipes from '../Components/Recipes/Recipes';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/recipes' component={ RecipesList } />
    <Route path='/profile' component={ Profile } />
    <Route path='/recipes/:id' component={ Recipes } />
  </Switch>
);