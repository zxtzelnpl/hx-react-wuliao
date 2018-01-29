'use strict'

import './Experience.less'

import React, {Component} from 'react'
import {connect} from 'react-redux'

import Head from '../components/Head'
import StockReportByWeek from '../components/experience/StockReportByWeek'
import StockReportAnnual from '../components/experience/StockReportAnnual'
import MediaVideo from '../components/experience/MediaVideo'

class Experience extends Component {
  constructor (props) {
    super(props)
    this.tabNames = [
      '股票周报',
      '股票年报',
      '媒体视频']
    this.tabContents = [
      <StockReportByWeek location={this.props.location}/>,
      <StockReportAnnual location={this.props.location}/>,
      <MediaVideo location={this.location}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(Experience)
