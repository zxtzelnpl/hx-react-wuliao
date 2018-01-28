import * as actionTypes from '../constants/user'

export const initialState = {
  isFetching: false,
  account: '',
  location:1,
  check: false
}

export default function user (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOCATION_CHANGE:
      return {
        ...state,
        location: action.location
      }
    case actionTypes.USERCHECK_REQUEST_POST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.USERCHECK_RECEIVED:
      return {
        ...state,
        isFetching: false,
        account: action.account,
        check: true
      }
    case actionTypes.USERCHECK_ERROR:
      return {
        ...state,
        isFetching: false,
      }
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        account: '',
        check: false
      }
    default:
      return state
  }
}