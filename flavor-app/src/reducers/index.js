import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer'

export default combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer,
  error: errorReducer,
  auth: authReducer
})