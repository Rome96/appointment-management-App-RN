import { ADD_QUOTE } from '../constants/action-types'

export function addQuote(payload) {
  return {
    type: ADD_QUOTE,
    payload,
  };
}