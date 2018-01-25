'use strict'

import './index.less'

import React, {Component} from 'react'
import Login from './Login'

class PopLogin extends Component {


  close () {
    this.props.viewsActions.pop_login(false)
  }

  login ({account,password,code}) {
    // if (!phoneCheck(phone)) {
    //   alert('手机格式不对，请重新输入')
    // }
    this.props.userActions.fetchPostsIfNeeded({
      account,
      password,
      code
    })
  }

  render () {
    let pop_login_html = (<div className="pop-login">
      <Login
        close={this.close.bind(this)}
        login={this.login.bind(this)}
      />
    </div>)
    return (
        (this.props.views.pop_login&&!this.props.user.check)
            ?
            pop_login_html
            : <div/>
    )
  }
}

export default PopLogin
