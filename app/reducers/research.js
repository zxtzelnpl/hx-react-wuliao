'use strict'

import * as actionTypes from '../constants/research'

export const initialState = {
  isFetching: false,
  data: [],
  period_0:[],
  period_1:[]
}

export default function research (state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_PERIOD:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEIVED_PERIOD:
      return {
        ...state,
        period_0:action.period_0,
        period_1:action.period_1,
        isFetching: false
      }
    case actionTypes.REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEIVED_DATA:
      return {
        ...state,
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