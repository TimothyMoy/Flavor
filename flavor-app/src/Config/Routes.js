import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from '../Components/Home/Home';
import RecipesList2 from '../Components/RecipesList2/RecipesList';
import Profile from '../Components/Profile/Profile';
import Recipes from '../Components/Recipes/Recipes';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/recipes' component={ RecipesList2 } />
    <Route path='/profile' component={ Profile } />
    <Route path='/recipe' component={ Recipes } />
  </Switch>
);