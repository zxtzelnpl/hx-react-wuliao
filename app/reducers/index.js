'use strict'

import {combineReducers} from 'redux'
import user from './user'
import views from './views'
import chat from './chat'

export default combineReducers({
  user,
  views,
  chat
})