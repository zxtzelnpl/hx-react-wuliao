'use strict'

import './PopLogin.less'

import logo from '../static/img/icon_noli_logo_r.png'
import close from '../static/img/icon_login_off.png'
import test from '../test/code.jpg'

import React, {Component} from 'react'

import {trim, phoneCheck} from "../static/tools";

class PopLogin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choice: '',
      phone: '',
      password: '',
      code: ''
    }
  }

  onFocus (choice) {
    this.setState({
      choice: choice
    })
  }

  onChangePhone (e) {
    let value = trim(e.target.value)
    this.setState({
      phone: value
    })
  }

  onChangePassword (e) {
    let value = trim(e.target.value)
    this.setState({
      password: value
    })
  }

  onChangeCode (e) {
    let value = trim(e.target.value)
    this.setState({
      code: value
    })
  }

  onClickBtn () {
    let {phone, password, code} = this.state
    if (!phoneCheck(phone)) {
      alert('手机格式不对，请重新输入')
    }
    console.log(this.state)
  }

  onClose () {
    this.props.viewsActions.pop_login(false)
  }

  ChangeCode(){
    console.log('changeCode')
  }

  render () {
    let pop_login_html = (<div className="pop-login">
      <div className="content">
        <div className="blank-h-30"/>
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="blank-h-30"/>
        <div className="text">
          <span className="before-line">——</span>
          <span>使用用户名登录</span>
          <span className="after-line">——</span>
        </div>
        <div className="blank-h-20"/>
        <div className="phone">
          <input type="text"
                 className={this.state.choice === "phone" ? "choice" : ""}
                 placeholder={this.state.choice === "phone" ? "" : "请输入手机号"}
                 value={this.state.phone}
                 onFocus={this.onFocus.bind(this, 'phone')}
                 onChange={this.onChangePhone.bind(this)}
          />
        </div>
        <div className="blank-h-20"/>
        <div className="password">
          <input type="password"
                 className={this.state.choice === "password" ? "choice" : ""}
                 placeholder={this.state.choice === "password" ? "" : "请输入密码"}
                 value={this.state.password}
                 onFocus={this.onFocus.bind(this, 'password')}
                 onChange={this.onChangePassword.bind(this)}
          />
        </div>
        <div className="blank-h-20"/>
        <div className="code">
          <input type="text"
                 className={this.state.choice === "code" ? "choice" : ""}
                 placeholder={this.state.choice === "code" ? "" : "请输入验证码"}
                 value={this.state.code}
                 onFocus={this.onFocus.bind(this, 'code')}
                 onChange={this.onChangeCode.bind(this)}
          />
          <img
              onClick={this.ChangeCode.bind(this)}
              src={test} alt=""
          />
        </div>
        <div className="blank-h-40"/>
        <div className="login-btn">
                  <span className="btn"
                        onClick={this.onClickBtn.bind(this)}
                  >登录</span>
        </div>
        <span className="close" onClick={this.onClose.bind(this)}>
                  <img src={close} alt=""/>
                </span>
      </div>
    </div>)
    return (
        this.props.views.pop_login
            ?
            pop_login_html
            : <div/>
    )
  }
}

export default PopLogin
