'use strict'

import './Head.less'

import React, {Component} from 'react'

import Tabs from '../Tabs'
import Risk from '../Risk'

class Head extends Component {
  constructor (props){
    super(props)
    this.datas=[
        '案例回顾',
        '推广物料',
        '视频节目'
    ]
  }

  onChange(item){
    console.log(item)
  }

  render () {
    return (
        <div className="strategy-head">
          <Tabs
            datas={this.datas}
            selected={0}
            onChange={this.onChange.bind(this)}
          />
          <Risk />
        </div>
    )
  }
}

export default Head
