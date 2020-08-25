import { GET_INGREDIENTS, ADD_INGREDIENTS, DELETE_INGREDIENTS, INGREDIENTS_LOADING } from '../actions/types';
import {v1 as uuid} from 'uuid';

const initialState = {
    ingredients: [],
    loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: true
      };

    case DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter(ingredients => ingredients._id !== action.payload)
      };

    case ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [action.payload, ...state.ingredients]
      };

    case INGREDIENTS_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}