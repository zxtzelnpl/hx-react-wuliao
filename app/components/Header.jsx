'use strict'

import '../static/normalize.css'
import './Header.less'

import logo from '../static/img/icon_noli_logo_r.png'
import favorite from '../static/img/icon_home_collection.png'
import save from '../static/img/icon_home_zm.png'
import icon_tx from '../static/img/icon_tx.png'

import React, {Component} from 'react'

import Selection from './Selection'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  onLoginBtnClick () {
    this.props.viewsActions.pop_login(true)
  }

  onLocationSelect (item) {
    this.props.userActions.location_change(item)
  }

  saveToBrowser () {
    alert('alert(Ctrl+D收藏直播室)')
  }

  saveToDesk () {

  }

  render () {
    return (
        <header>
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          <div className="login-state">
            {
              this.props.user.check
                  ? <div className="user-brief">
                    <img src={icon_tx}/>
                  </div>
                  : <span
                      className="login-btn"
                      onClick={this.onLoginBtnClick.bind(this)}
                  >登录</span>
            }
            <div className="location">
              <Selection
                  datas={['上海', '广州', '北京']}
                  selected={this.props.user.location}
                  onSelect={this.onLocationSelect.bind(this)}
              />
            </div>
            <div className="favorite" onClick={this.saveToBrowser}>
              <img src={favorite} alt=""/>
            </div>
            <div className="save-to-desk">
              <img src={save} alt=""/>
            </div>
          </div>
        </header>
    )
  }
}

export default Header
