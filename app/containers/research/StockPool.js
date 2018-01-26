'use strict'

import React from 'react'
import {connect} from 'react-redux'
import * as researchActionsFromOtherFile from "../../actions/research"
import {bindActionCreators} from "redux";
import StockPool from '../../components/research/StockPool'

function mapStateToProps(state) {
  return {
    location:state.user.location,
    period_0:state.research.period_0,
    period_1:state.research.period_1,
    data:state.research.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    researchActions: bindActionCreators(researchActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StockPool)