import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';

export default combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer
})