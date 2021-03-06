import { GET_RECIPES, ADD_RECIPES, DELETE_RECIPES, RECIPES_LOADING, FIND_RECIPES, PUT_RECIPES } from '../actions/types';

const initialState = {
    recipes: [],
    loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: true
      };

    case FIND_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: true
      };

    case DELETE_RECIPES:
      return {
        ...state,
        recipes: state.recipes.filter(recipes => recipes._id !== action.payload)
      };

    case ADD_RECIPES:
      return {
        ...state,
        recipes: [action.payload, ...state.recipes]
      };

    case PUT_RECIPES:
    return {
      ...state,
      recipes: state.recipes.filter(recipes => recipes._id !== action.payload)
    };

    case RECIPES_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}