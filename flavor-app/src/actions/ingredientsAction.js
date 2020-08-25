import axios from 'axios';
import { GET_INGREDIENTS, ADD_INGREDIENTS, DELETE_INGREDIENTS, INGREDIENTS_LOADING } from '../actions/types';

export const getIngredients = () => dispatch => {
  dispatch(setIngredientsLoading());
  axios
    .get('/api/Ingredients')
    .then(res => dispatch({
        type: GET_INGREDIENTS,
        payload: res.data
      })
    );
};

export const addIngredients = ingredient => dispatch => {
  axios
    .post('/api/Ingredients', ingredient)
    .then(res => dispatch({
      type: ADD_INGREDIENTS,
      payload: res.data
    }))
};

export const deleteIngredients = id => dispatch => {
  axios
  .delete(`/api/Ingredients/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_INGREDIENTS,
      payload: id
    })
  )
};


export const setIngredientsLoading = () => {
  return {
    type: INGREDIENTS_LOADING
  }
}