import { ADD_QUOTE, DELETE_QUOTE } from "../constants/action-types";
import store from "../store";

const initialState = {
  quotes: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        ...state,
        quotes: state.quotes.concat(action.payload),
      };  
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter(quote => quote.id !== action.payload),
      };
    default:
      break;
  }
  return state;
}

export default rootReducer