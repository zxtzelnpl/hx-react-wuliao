'use strict'

import * as actionTypes from '../constants/views'

export const pop_login = (show) => ({
  type: actionTypes.LOGIN_POP_CHANGE,
  show: show
})

export const pop_back = (show) => ({
  type: actionTypes.BACK_POP_CHANGE,
  show: show
})