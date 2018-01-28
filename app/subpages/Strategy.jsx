'use strict'

import './Strategy.less'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import Head from '../components/Head'
import StrategyMorning from '../components/strategy/StrategyMorning'
import StrategyNoon from '../components/strategy/StrategyNoon'
import StrategyEvening from '../components/strategy/StrategyEvening'

class Strategy extends Component {
  constructor (props) {
    super(props)
    this.tabNames = [
      '股票早评',
      '盘中解读',
      '股票收评']
    this.tabContents = [
      <StrategyMorning location={this.props.location}/>,
      <StrategyNoon location={this.props.location}/>,
      <StrategyEvening location={this.props.location}/>
    ]
    this.state={
      selected:0
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

/**绑定Redux**/
function mapStateToProps(state) {
  return {
    location:state.user.location
  }
}
function mapDispatchToProps() {
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Strategy)
