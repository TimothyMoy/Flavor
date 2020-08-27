import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  recipes: recipesReducer,
  error: errorReducer,
  auth: authReducer
})