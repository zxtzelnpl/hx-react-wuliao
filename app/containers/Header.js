'use strict'

import React from 'react'
import {connect} from 'react-redux'
import * as viewsActionsFromOtherFile from "../actions/views";
import * as userActionsFromOtherFile from "../actions/user";
import {bindActionCreators} from "redux";
import Header from '../components/Header'

function mapStateToProps(state) {
  return {
    user:state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewsActions: bindActionCreators(viewsActionsFromOtherFile, dispatch),
    userActions: bindActionCreators(userActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)