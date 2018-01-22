'use strict'

import React from 'react'
import {connect} from 'react-redux'
import * as viewsActionsFromOtherFile from "../actions/views";
import {bindActionCreators} from "redux";
import Header from '../components/Header'

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    viewsActions: bindActionCreators(viewsActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)