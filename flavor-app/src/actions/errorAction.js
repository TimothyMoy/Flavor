import axios from 'axios';
import { GET_ERRORS, CLEAR_ERRORS} from "./types";

// RETURN ERRORS
export const returnErrors = () => (msg, status, id) => {
  return {
    type: GET_ERRORS,
    payload: {msg, status, id}
  };
};

export const clearErrors = () => {
  return {
    types: CLEAR_ERRORS
  };
};