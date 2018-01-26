'use strict'

import * as actionTypes from '../constants/research'

export const initialState = {
  isFetching: false,
  data: []
}

export default function research (state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEIVED:
      return {
        data: action.data,
        isFetching: false
      }
    case actionTypes.ERROR:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}