'use strict'

import * as actionTypes from '../constants/chat'

export const initialState = {
  isFetchingMessage: false,
  messages:[],
  from_id:'',
  isFetchingRedis:false,
  redis:[],
  score:new Date().getTime()+'0'
}

export default function chat (state = initialState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_MESSAGE:
      return {
        ...state,
        isFetchingMessage: true
      }
    case actionTypes.MESSAGE_ERROR:
      return {
        ...state,
        isFetchingMessage: false
      }
    case actionTypes.RECEIVED_MESSAGE:
      return {
        ...state,
        messages:[...state.messages,...action.messages],
        from_id:action.from_id,
        isFetchingMessage: false,
      }
    case actionTypes.REQUEST_REDIS:
      return {
        ...state,
        isFetchingRedis: true
      }
    case actionTypes.REDIS_ERROR:
      return{
        ...state,
        isFetchingRedis: false
      }
    case actionTypes.RECEIVED_REDIS:
      return {
          ...state,
        redis:[...state.redis,...action.redis],
        score:action.score,
        isFetchingRedis: false,
      }
    case actionTypes.SEND_BACK:
      return {
          ...state,
        redis:[...state.redis,action.message],
        isFetchingRedis: false,
      }
    default:
      return state
  }
}