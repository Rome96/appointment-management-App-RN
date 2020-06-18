import { ADD_QUOTE, DELETE_QUOTE } from '../constants/action-types'

export const addQuote = (payload) => {
  return {
    type: ADD_QUOTE,
    payload,
  };
}

export const deleteQuote = (payload) => {
  return {
    type: DELETE_QUOTE,
    payload
  }
}