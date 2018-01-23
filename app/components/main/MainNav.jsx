'use strict'

import './MainNav.less'

import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class MainNav extends Component {
  render () {
    return (
        <div className="main-nav">
          <ul>
            <li>
              <Link to="/livevideo"><div className="nav-item live-video">视频直播</div></Link>
            </li>
            <li>
              <Link to="/research"><div className="nav-item research">研究素材</div></Link>
            </li>
            <li>
              <Link to="/strategy"><div className="nav-item strategy">策略素材</div></Link>
            </li>
            <li>
              <Link to="/marketing"><div className="nav-item marketing">营销素材</div></Link>
            </li>
            <li>
              <Link to="/experience"><div className="nav-item experience">体验素材</div></Link>
            </li>
            <li>
              <Link to="/customerservice"><div className="nav-item customer-service">客服素材</div></Link>
            </li>
            <li>
              <Link to="/test"><div className="nav-item playback">回播</div></Link>
            </li>
          </ul>
        </div>
    )
  }
}

export default MainNav
