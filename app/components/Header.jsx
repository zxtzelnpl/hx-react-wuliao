'use strict'

import '../static/normalize.css'
import './Header.less'

import logo from '../static/img/icon_noli_logo_r.png'
import favorite from '../static/img/icon_home_collection.png'
import save from '../static/img/icon_home_zm.png'

import React, {Component} from 'react'

class Header extends Component {
  render () {
    return (
        <header>
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <div className="login-state">
            <div>
              <span className="login-btn" >登录</span>
              <div className="location">上海</div>
              <div className="favorite">
                <img src={favorite} alt=""/>
              </div>
              <div className="save-to-desk">
                <img src={save} alt=""/>
              </div>
            </div>
          </div>
        </header>
    )
  }
}

export default Header
