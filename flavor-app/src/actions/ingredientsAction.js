import axios from 'axios';
import { GET_INGREDIENTS, ADD_INGREDIENTS, DELETE_INGREDIENTS, INGREDIENTS_LOADING } from '../actions/types';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';

export const getIngredients = () => dispatch => {
  dispatch(setIngredientsLoading());
  axios
    .get('/api/Ingredients')
    .then(res => dispatch({
        type: GET_INGREDIENTS,
        payload: res.data
      }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addIngredients = ingredient => (dispatch, getState) => {
  axios
    .post('/api/Ingredients', ingredient, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_INGREDIENTS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteIngredients = id => (dispatch, getState) => {
  axios
  .delete(`/api/Ingredients/${id}`, tokenConfig(getState))
  .then(res =>
    dispatch({
      type: DELETE_INGREDIENTS,
      payload: id
    }))
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


export const setIngredientsLoading = () => {
  return {
    type: INGREDIENTS_LOADING
  }
}