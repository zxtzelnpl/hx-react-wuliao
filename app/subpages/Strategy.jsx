'use strict'

import './Strategy.less'

import React, {Component} from 'react'

import Head from '../components/strategy/Head'
import StrategyContent from '../components/strategy/StrategyContent'
import Pages from '../components/Pages'

class Strategy extends Component {
  render () {
    return (
        <div className="container-strategy">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
          <div className="content">
            <Pages selected={0}/>
            <div className="blank-w-20" />
            <StrategyContent />
          </div>
        </div>
    )
  }
}

export default Strategy
