'use strict'

import * as actionTypes from '../constants/views'

export const pop_login = (show) => ({
  type: actionTypes.LOGIN_POP_CHANGE,
  show: show
})