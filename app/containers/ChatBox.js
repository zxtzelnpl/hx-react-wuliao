'use strict'

import React from 'react'
import {connect} from 'react-redux'
import * as chatActionsFromOtherFile from "../actions/chat"
import {bindActionCreators} from "redux";
import ChatBox from '../components/livevideo/ChatBox'

function mapStateToProps(state) {
  return {
    account:state.user.account,
    messages:state.chat.messages,
    isFetchingMessage:state.chat.isFetchingMessage,
    redis:state.chat.redis
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chatActions: bindActionCreators(chatActionsFromOtherFile, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatBox)