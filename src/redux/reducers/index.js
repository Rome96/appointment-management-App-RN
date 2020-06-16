import { ADD_QUOTE } from "../constants/action-types";

const initialState = {
  quotes: []
};

function rootReducer(state = initialState, action) {
  // switch (action.type) {
  //   case ADD_QUOTE:
  //     return {
  //       ...state,
  //       quotes: action.quotes
  //     }
  //     break;
  
  //   default:
  //     break;
  // }
  if (action.type === ADD_QUOTE) {
    return Object.assign({}, state, {
      quotes: state.quotes.concat(action.payload),
    });
  }
  return state;
}

export default rootReducer