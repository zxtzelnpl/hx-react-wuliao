'use strict'

import './Head.less'

import React, {Component} from 'react'

import Tabs from './Tabs'
import Risk from './Risk'

class Head extends Component {
  render () {
    return (
        <div className="strategy-head">
          <Tabs
            datas={this.props.tabNames}
            selected={this.props.selected}
            onChange={this.props.tabChange}
          />
          <Risk />
        </div>
    )
  }
}

export default Head
