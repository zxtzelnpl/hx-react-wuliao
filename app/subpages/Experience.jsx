'use strict'

import './Experience.less'

import React, {Component} from 'react'

import Head from '../components/Head'

class Experience extends Component {
  constructor (props) {
    super(props)
    this.tabNames = [
      '股票周报',
      '股票年报',
      '媒体视频']
    this.tabContents = [

    ]
    this.state={
      selected:1
    }
  }

  tabChange (index) {
    this.setState({
      selected:index
    })
  }

  render () {
    return (
        <div className="container-experience">
          <div className="blank-h-20"/>
          <Head
              tabNames={this.tabNames}
              tabChange={this.tabChange.bind(this)}
              selected = {this.state.selected}
          />
          <div className="blank-h-20"/>
          {this.tabContents[this.state.selected]}
        </div>
    )
  }
}

export default Experience
