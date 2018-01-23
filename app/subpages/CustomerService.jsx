'use strict'

import './CustomerService.less'

import React, {Component} from 'react'
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
      <StockAnalyze />,
      <ServiceVideo />
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

export default CustomerService
