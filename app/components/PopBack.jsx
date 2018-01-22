'use strict'

import './PopBack.less'

import icon_noli_logo_w from '../static/img/icon_noli_logo_w.png'
import icon_noli_ts from '../static/img/icon_noli_ts.png'
import icon_noli_pff from '../static/img/icon_noli_pff.png'

import React, {Component} from 'react'

class PopBack extends Component {

  onClose () {
    this.props.viewsActions.pop_back(false)
  }

  render () {
    let pop_back_html = (<div className="pop-back">
      <div className="content">
        <div className="inner-wrap">
          <div className="up">
            <img src={icon_noli_logo_w} alt=""/>
          </div>
          <div className="middle">
            <img className="welcome-img" src={icon_noli_ts} alt=""/>
            <div className="welcome">
              <p className="wel-title">欢迎回来！</p>
              <p className="wel-text">系统检测到你很久没有登录啦！君银投顾更新了很多内容哦,望及时查看</p>
            </div>
          </div>
          <div className="down">

          </div>
        </div>
        <div className="close" onClick={this.onClose.bind(this)}>
          <img src={icon_noli_pff} alt=""/>
        </div>
      </div>
    </div>)
    return this.props.views.pop_back?pop_back_html:''
  }
}

export default PopBack
