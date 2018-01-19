'use strict'

import './LoginBox.less'

import React, {Component} from 'react'

class LoginBox extends Component {
  render () {
    return (
        <div className="login-box">
          <div className="content">
            <div className="logo"></div>
            <div className="text"></div>
            <div className="phone"></div>
            <div className="password"></div>
            <div className="code"></div>
            <div className="login-btn"></div>
          </div>
        </div>
    )
  }
}

export default LoginBox
