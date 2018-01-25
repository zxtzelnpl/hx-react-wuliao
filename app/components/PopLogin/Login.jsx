'use strict'

import './Login.less'

import logo from '../../static/img/icon_noli_logo_r.png'
import close from '../../static/img/icon_login_off.png'
import React, {Component} from 'react'
import {get_code, pre_code} from '../../config/urls'
import {trim, phoneCheck} from "../../static/tools";

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      choice: '',
      account: '',
      password: '',
      code: '',
      code_img_url: ''
    }
  }

  render () {
    return (
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
          <div className="account">
            <input type="text"
                   className={this.state.choice === "account" ? "choice" : ""}
                   placeholder={this.state.choice === "account" ? "" : "请输入手机号"}
                   value={this.state.phone}
                   onFocus={this.onFocus.bind(this, 'account')}
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
                onClick={this.getCode.bind(this)}
                src={this.state.code_img_url} alt=""
            />
          </div>
          <div className="blank-h-40"/>
          <div className="login-btn">
                  <span className="btn"
                        onClick={this.login.bind(this)}
                  >登录</span>
          </div>
          <span className="close" onClick={this.props.close}>
                  <img src={close} alt=""/>
          </span>
        </div>
    )
  }

  getCode () {
    console.log('changeCode')
    fetch(get_code, {
      method: 'POST',
      credentials: 'include'
    })
        .then(res => res.json())
        .then(text => {
          console.log(text)
          let code_img_url = pre_code + text
          console.log(code_img_url)
          this.setState({
            code_img_url: code_img_url
          })
        })
  }

  onFocus (choice) {
    this.setState({
      choice: choice
    })
  }

  onChangePhone (e) {
    let value = trim(e.target.value)
    this.setState({
      account: value
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

  login(){
    let {account,password,code} = this.state
    this.props.login({
      account,
      password,
      code
    })
  }

  componentDidMount () {
    this.getCode()
  }
}

export default Login
