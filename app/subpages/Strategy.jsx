'use strict'

import './Strategy.less'

import React, {Component} from 'react'

import Head from '../components/Head'
import StrategyContentMorinig from '../components/strategy/StrategyContentMorinig'
import StrategyContentNoon from '../components/strategy/StrategyContentNoon'
import StrategyContentEvening from '../components/strategy/StrategyContentEvening'
import Pages from '../components/Pages'

class Strategy extends Component {

  constructor (props) {
    super(props)
    this.tabNames = [
      '股票早评',
      '盘中解读',
      '股票收评']
    this.tabContents = [
      <StrategyContentMorinig />,
      <StrategyContentNoon />,
      <StrategyContentEvening />
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
        <div className="container-strategy">
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

export default Strategy
