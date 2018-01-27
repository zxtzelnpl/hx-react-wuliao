'use strict'

import './StockPool.less'

import React, {Component} from 'react'
import Selection from '../research/Selection'
import StockItem from '../research/StockItem'

class StockPool extends Component {
  constructor() {
    super()
  }

  primarySelectionStockChange(periods) {
    let location = this.props.location === '上海' ? 1 : 0
        , type = 0
    this.props.researchActions.fetchIfNeeded({
      location,
      periods,
      type
    })
  }

  handPickChange(periods) {
    let location = this.props.location === '上海' ? 1 : 0
        , type = 1
    this.props.researchActions.fetchIfNeeded({
      location,
      periods,
      type
    })
  }

  componentDidMount() {
    let location = this.props.location === '上海' ? 1 : 0
    this.props.researchActions.fetchPeriodIfNeeded({location})
  }

  render() {
    let {data, period_0, period_1, isFetching} = this.props.research
    let stocks_one = [],
        stocks_two = [],
        stocks_three = [],
        stocks_num = data.length
    data.forEach((stock, index) => {
      if (index % 3 === 0) {
        stocks_one.push(<StockItem stock={stock} key={stock.id}/>)
      }
      else if (index % 3 === 1) {
        stocks_two.push(<StockItem stock={stock} key={stock.id}/>)
      }
      else if (index % 3 === 2) {
        stocks_three.push(<StockItem stock={stock} key={stock.id}/>)
      }
    })
    return (
        <div className="stock-pool">
          <div className="stock-pool-head">
            <div className="stock-pool-head-box primary-selection-stock">
              <p className="title">初选股票池sh</p>
              {period_0.length > 0
                  ? <Selection
                      datas={period_0}
                      onSelect={this.primarySelectionStockChange.bind(this)}
                  />
                  : <div className="zxt-selection"/>
              }

            </div>
            <div className="stock-pool-head-box hand-pick">
              <p className="title">精选股票池sh</p>
              {period_0.length > 0
                  ? <Selection
                      datas={period_1}
                      onSelect={this.handPickChange.bind(this)}
                  />
                  : <div className="zxt-selection"/>
              }
            </div>
          </div>
          <div className="blank-h-20"/>
          <div className="stock-pool-neck">
            <p className="text">一共筛选出<span>{stocks_num}</span>个初选股票</p>
            <p className="download">下载</p>
          </div>
          <div className="blank-h-20"/>
          <div className="stock-pool-content">
            <div className="stock-pool-content-wrap">
              <ul className="stock-content one">
                {stocks_one}
              </ul>
              <div className="blank-w-19"/>
              <ul className="stock-content two">
                {stocks_two}
              </ul>
              <div className="blank-w-19"/>
              <ul className="stock-content two">
                {stocks_three}
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default StockPool
