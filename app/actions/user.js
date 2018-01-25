'use strict'

import * as actionTypes from '../constants/user'
import {user_login,user_logout} from '../config/urls'

const requestPosts = () => ({
  type: actionTypes.USERCHECK_REQUEST_POST
})

const received = (account) =>({
  type: actionTypes.USERCHECK_RECEIVED,
  account,
})

const receivedError = () =>({
  type: actionTypes.USERCHECK_ERROR
})

const fetchPosts = value => dispatch => {
  dispatch(requestPosts())
  let {account,password,code} = value
  let url = `${user_login}?account=${account}&password=${password}&yzm=${code}`

  return fetch(url,{method:'GET',credentials:'include'})
      .then(response => response.json())
      .then(json => {
        if(json.status){
          dispatch(received(account))
        }
        else{
          alert(json.msg)
          dispatch(receivedError())
        }
      })
      .catch(err=>{
        alert('网络连接错误，请稍后再试')
        dispatch(receivedError())
      })
}

const shouldFetchPosts = (state) => {
  return !state.user.isFetching;
}

export const fetchPostsIfNeeded = value => (dispatch, getState) => {
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts(value))
  }
}

export const location_change = value =>({
  type: actionTypes.USER_LOCATION_CHANGE,
  location:value
})

export const logout = ()=>({
  type: actionTypes.USER_LOGOUT
})