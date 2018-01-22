'use strict'

import React from 'react'
import {connect} from 'react-redux'
import * as viewsActionsFromOtherFile from "../actions/views";
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopLogin)