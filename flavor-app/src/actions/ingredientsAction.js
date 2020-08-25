import { GET_INGREDIENTS, ADD_INGREDIENTS, DELETE_INGREDIENTS } from '../actions/types';

export const getIngredients = () => {
  return {
    type: GET_INGREDIENTS,
  };
};

export const deleteIngredients = id => {
  return {
    type: DELETE_INGREDIENTS,
    payload: id
  };
};

export const addIngredients = ingredient => {
  return {
    type: ADD_INGREDIENTS,
    payload: ingredient
  };
};