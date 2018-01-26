'use strict'

import * as actionTypes from '../constants/research'
import {api_research,api_research_period} from "../config/urls"

const request = () => ({
  type: actionTypes.REQUEST_DATA
})

const received = (data) => ({
  type: actionTypes.RECEIVED_DATA,
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

const requestPeriod = () => ({
  type: actionTypes.REQUEST_PERIOD
})
const receivedPeriod = (period_0,period_1) => ({
  type: actionTypes.RECEIVED_PERIOD,
  period_0,
  period_1
})
const fetch_period = value => dispatch =>{
  dispatch(requestPeriod())
  let {location} = value
      , url0=`${api_research_period}/${location}/0`
      , url1=`${api_research_period}/${location}/1`
      , fetch0 = fetch(url0,{method:'GET',credentials:'include'})
      .then(res=>res.json())
      , fetch1 = fetch(url1,{method:'GET',credentials:'include'})
      .then(res=>res.json())

  Promise.all([fetch0,fetch1])
      .then(([period_0,period_1])=>{
        dispatch(receivedPeriod(period_0,period_1))
      })
      .catch(err=>{
        console.log(err)
        dispatch(error())
      })
}
export const fetchPeriodIfNeeded = value => (dispatch,getState)=>{
  let state = getState().research
  if (shouldFecth(state)) {
    dispatch(fetch_period(value))
  }
}