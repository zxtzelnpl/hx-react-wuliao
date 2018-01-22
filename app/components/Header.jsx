'use strict'

import '../static/normalize.css'
import './Header.less'

import logo from '../static/img/icon_noli_logo_r.png'
import favorite from '../static/img/icon_home_collection.png'
import save from '../static/img/icon_home_zm.png'

import React, {Component} from 'react'

import Selection from './Selection'

class Header extends Component {
  onLoginBtnClick(){
    this.props.viewsActions.pop_login(true)
  }

  onLocationSelect(item){
    console.log('onLocationSelect')
    console.log(item)
  }

  render () {
    return (
        <header>
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <div className="login-state">
            <div>
              <span
                  className="login-btn"
                  onClick={this.onLoginBtnClick.bind(this)}
              >登录</span>
              <div className="location">
                <Selection
                    datas={['上海','广州','北京']}
                    selected={'上海'}
                    onSelect={this.onLocationSelect.bind(this)}
                />
              </div>
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
