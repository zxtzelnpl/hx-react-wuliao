'use strict'

import React from 'react'
import {connect} from 'react-redux'
import * as viewsActionsFromOtherFile from "../actions/views";
import * as userActionsFromOtherFile from "../actions/user";
import {bindActionCreators} from "redux";
import PopLogin from '../components/PopLogin'

function mapStateToProps(state) {
  return {
    views: state.views
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewsActions: bindActionCreators(viewsActionsFromOtherFile, dispatch),
    userActions:bindActionCreators(userActionsFromOtherFile, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopLogin)