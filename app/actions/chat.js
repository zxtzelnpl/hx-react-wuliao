'use strict'

import * as actionTypes from '../constants/chat'
import {get_redis, send_message, get_message, upload_img} from '../config/urls'

/**下拉加载**/
const requestMessage = () => ({
  type: actionTypes.REQUEST_MESSAGE
})
const receivedMessage = (from_id, messages) => ({
  type: actionTypes.RECEIVED_MESSAGE,
  from_id,
  messages,
})
const receivedMessageError = () => ({
  type: actionTypes.MESSAGE_ERROR
})
const fetchMessage = () => (dispatch, getState) => {
  dispatch(requestMessage())
  let id_to = getState().chat.id_from
      , id_from
      , url
  if (id_to) {
    id_from = parseInt(id_to) - 20
    url = `${get_message}/${id_from}/${id_to}`
  }
  else {
    url = get_message
  }
  return fetch(url, {method: 'GET', credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          dispatch(receivedMessage(id_from, json))
        }
        else {
          alert(json.msg)
          dispatch(receivedMessageError())
        }
      })
      .catch(err => {
        alert('网络连接错误，请稍后再试')
        dispatch(receivedMessageError())
      })
}
const shouldFetchMessage = (state) => {
  return !state.chat.isFetchingMessage;
}
export const fetchMessageIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchMessage(getState())) {
    return dispatch(fetchMessage(value))
  }
}

/**轮训刷新**/
const requestRedis = () => ({
  type: actionTypes.REQUEST_REDIS
})
const receivedRedis = (redis, score) => ({
  type: actionTypes.RECEIVED_REDIS,
  redis,
  score
})
const receivedRedisError = () => ({
  type: actionTypes.REDIS_ERROR
})
const fetchRedis = value => dispatch => {
  dispatch(requestRedis())
  let url = `${get_redis}?score=${value}`
  fetch(url, {method: 'GET', credentials: 'include'})
      .then(res => res.json())
      .then(json => {
        if (json !== 'nochat') {
          let {score, data_list} = json
          receivedRedis(data_list, score)
        }
        else {
          dispatch(receivedRedisError())
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(receivedRedisError())
      })
}
const shouldFetchRedis = (state) => {
  return !state.chat.isFetchingRedis;
}
export const fetchRedisIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchRedis(getState())) {
    return dispatch(fetchRedis(value))
  }
}

/**用户发送**/
const sendBack = (message) => {
  return {
    type: actionTypes.SEND_BACK,
    message,
  }

}
export const send = value => dispatch => {
  dispatch(requestRedis())
  let {name, gid=1, content} = value
  let url = `${send_message}?name=${name}&gid=${gid}&content=${content}`
  // let url = `${send_message}?name=testtest123&gid=1&content=${content}`

  fetch(url, {method: 'POST', credentials: 'include'})
      .then(response => response.json())
      .then(json => {
        if (json === 1) {
          dispatch(sendBack(value))
        }
      })
      .catch(err=>{
        console.log(err)
        dispatch(receivedRedisError())
      })
}