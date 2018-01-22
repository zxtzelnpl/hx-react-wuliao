'use strict'

import * as actionTypes from '../constants/views'

export const initialState = {
  pop_login: false
}

export default function views (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_POP_CHANGE:
      return {
        ...state,
        pop_login: action.show
      }
    default :
      return state
  }
}