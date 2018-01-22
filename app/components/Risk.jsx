'use strict'

import './Risk.less'

import warn from '../static/img/icon_other_warn.png'

import React, {Component} from 'react'

class Risk extends Component {
  render () {
    return (
        <div className="risk">
          <img src={warn} alt=""/>
          <p>上市有风险，投资许谨慎</p>
        </div>
    )
  }
}

export default Risk
