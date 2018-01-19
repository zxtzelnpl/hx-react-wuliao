'use strict'

import './Main.less'

import React, {Component} from 'react'
import TopBanner from '../components/TopBanner'
import MainNav from '../components/MainNav'
import QRCode from '../components/QRCode'

class Main extends Component {
  render () {
    return (
        <div className="containner-main">
          <TopBanner />
          <div className="blank-h-20" />
          <div className="main-wrap">
            <div className="wrap-left">
              <MainNav />
              <div className="blank-h-20" />
              <QRCode />
            </div>

          </div>
        </div>
    )
  }
}

export default Main
