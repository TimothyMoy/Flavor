import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from '../Components/Home/Home';
import RecipesList from '../Components/RecipesList/RecipesList';
import Profile from '../Components/Profile/Profile';
import Recipe from '../Components/Recipe/Recipe';
import NewRecipe from '../Components/NewRecipe/NewRecipe'

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/recipes' component={ RecipesList } />
    <Route path='/profile' component={ Profile } />
    <Route path='/recipe' component={ Recipe } />
    <Route path='/newrecipe' component={ NewRecipe } />
  </Switch>
);