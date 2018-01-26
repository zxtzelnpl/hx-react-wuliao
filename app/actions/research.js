'use strict'

import * as actionTypes from '../constants/research'
import {api_research} from "../config/urls"

const request = () => ({
  type: actionTypes.REQUEST
})

const received = (data) => ({
  type: actionTypes.RECEIVED,
  data: data
})

const error = () => ({
  type: actionTypes.ERROR
})

const fetch_data = value => dispatch => {
  dispatch(request())
  let {location, periods, type} = value
  let url = `${api_research}/${location}/${periods}/${type}`
  fetch(url, {method: 'GET', credentials: 'include'})
      .then(res => res.json())
      .then(json => {
        dispatch(received(json))
      })
      .catch(err=>{
        console.log(err)
        dispatch(error())
      })
}

const shouldFecth = (state) => {
  return !state.isFetching
}

export const fetchIfNeeded = value => (dispatch, getState) => {
  let state = getState().research
  if (shouldFecth(state)) {
    dispatch(fetch_data(value))
  }
}
