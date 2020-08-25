import { GET_RECIPES, ADD_RECIPES, DELETE_RECIPES } from '../actions/types';

export const getRecipes = () => {
  return {
    type: GET_RECIPES,
  };
};

export const deleteRecipes = id => {
  return {
    type: DELETE_RECIPES,
    payload: id
  };
};