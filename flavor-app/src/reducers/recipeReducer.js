import {v1 as uuid} from 'uuid';
import { GET_RECIPES, ADD_RECIPES, DELETE_RECIPES } from '../actions/types';

const initialState = {
    recipes: [
      { id: uuid(), name:'Eggs' },
      { id: uuid(), name:'Milk' },
      { id: uuid(), name:'Steak' },
      { id: uuid(), name:'Candy' },
    ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RECIPES:
      return {
        ...state
      };
    default:
      return state;
  }
}