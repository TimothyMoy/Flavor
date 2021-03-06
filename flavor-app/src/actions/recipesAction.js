import axios from 'axios';
import { GET_RECIPES, ADD_RECIPES, DELETE_RECIPES, RECIPES_LOADING, FIND_RECIPES, PUT_RECIPES } from './types';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';

export const getRecipes = () => dispatch => {
  dispatch(setRecipesLoading());
  axios
    .get('/api/Recipes')
    .then(res => dispatch({
        type: GET_RECIPES,
        payload: res.data
      }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addRecipes = recipes => (dispatch, getState) => {
  axios
    .post('/api/Recipes', recipes, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_RECIPES,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const findRecipes = id => dispatch => {
  axios
    .get(`/api/Recipes/${id}`)
    .then(res => dispatch({
      type: FIND_RECIPES,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteRecipes = id => (dispatch, getState) => {
  axios
  .delete(`/api/Recipes/${id}`, tokenConfig(getState))
  .then(res =>
    dispatch({
      type: DELETE_RECIPES,
      payload: id
    }))
  .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const putRecipes = id => (dispatch, getState) => {
  axios
    .post(`/api/Recipes/${id}`, tokenConfig(getState))
    .then(res => dispatch({
      type: PUT_RECIPES,
      payload: id
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};


export const setRecipesLoading = () => {
  return {
    type: RECIPES_LOADING
  }
}