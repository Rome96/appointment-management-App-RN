import { ADD_QUOTE, DELETE_QUOTE } from '../constants/action-types'

export function addQuote(payload) {
  console.log('entro aqui', payload)
  return {
    type: ADD_QUOTE,
    payload,
  };
}

export function deleteQuote(payload) {
  console.log('Delete quote', payload);
  return {
    type: DELETE_QUOTE,
    payload
  }
}