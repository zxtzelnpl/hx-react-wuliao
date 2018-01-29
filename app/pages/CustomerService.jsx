'use strict'

import './CustomerService.less'

import React, {Component} from 'react'
import {connect} from "react-redux";
import Head from '../components/Head'
import StockAnalyze from '../components/customerservice/StockAnalyze'
import ServiceVideo from '../components/customerservice/ServiceVideo'

class CustomerService extends Component {
  constructor (props){
    super(props)
    this.tabNames = [
      '持仓分析',
      '服务视频']
    this.tabContents = [
      <StockAnalyze location={this.props.location} />,
      <ServiceVideo location={this.props.location} />
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
        <div className="container-customer-service">
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
export default connect(mapStateToProps,mapDispatchToProps)(CustomerService)
