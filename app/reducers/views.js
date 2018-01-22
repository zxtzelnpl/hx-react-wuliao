'use strict'

import * as actionTypes from '../constants/views'

export const initialState = {
  pop_login: false,
  pop_back:false
}

export default function views (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_POP_CHANGE:
      return {
        pop_login: action.show,
        pop_back:false
      }
    case actionTypes.BACK_POP_CHANGE:
      return {
        pop_login:false,
        pop_back: action.show
      }
    default :
      return state
  }
}