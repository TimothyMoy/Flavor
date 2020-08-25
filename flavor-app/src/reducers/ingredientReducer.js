import {v1 as uuid} from 'uuid';
import { GET_INGREDIENTS, ADD_INGREDIENTS, DELETE_INGREDIENTS } from '../actions/types';

const initialState = {
    ingredients: [
      { id: uuid(), name:'Eggs' },
      { id: uuid(), name:'Milk' },
      { id: uuid(), name:'Steak' },
      { id: uuid(), name:'Candy' },
    ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_INGREDIENTS:
      return {
        ...state
      };

    case DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter(ingredients => ingredients.id !== action.payload)
      };

    case ADD_INGREDIENTS:
    return {
      ...state,
      ingredients: [action.payload, ...state.ingredients]
    }
    default:
      return state;
  }
}