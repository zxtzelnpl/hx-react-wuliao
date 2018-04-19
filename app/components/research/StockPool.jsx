'use strict'

import './StockPool.less'

import React, {Component} from 'react'
import Selection from './Selection'
import StockPoolNeck from './StockPoolNeck'
import StockItem from './StockItem'
import Loading  from '../Loading'

class StockPool extends Component {
  constructor(props) {
    super(props)
  }

  /**初选股票池sh**/
  primarySelectionStockChange(periods) {
    let location = this.props.location
        , type = 0
    this.props.researchActions.fetchIfNeeded({
      location,
      periods,
      type
    })
  }

  /**精选股票池sh**/
  handPickChange(periods) {
    let location = this.props.location
        , type = 1
    this.props.researchActions.fetchIfNeeded({
      location,
      periods,
      type
    })
  }

  componentDidMount() {
    let location = this.props.location
    this.props.researchActions.fetchPeriodIfNeeded({location})
  }

  componentDidUpdate(prevProps){
    let pre_location = prevProps.location
    let location = this.props.location
    if(pre_location!==location){
      this.props.researchActions.fetchPeriodIfNeeded({location})
    }
  }

  render() {
    let {data, period_0, period_1, isFetching} = this.props.research
    let stocks_one = [],
        stocks_two = [],
        stocks_three = []
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
                : <div className="zxt-no-data">暂时无数据</div>
              }

            </div>
            <div className="stock-pool-head-box hand-pick">
              <p className="title">精选股票池sh</p>
              {period_0.length > 0
                  ? <Selection
                      datas={period_1}
                      onSelect={this.handPickChange.bind(this)}
                  />
                  : <div className="zxt-no-data">暂时无数据</div>
              }
            </div>
          </div>
          <div className="blank-h-20"/>
          <StockPoolNeck data={data}/>
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
            {isFetching&&<Loading />}
          </div>
        </div>
    )
  }
}

export default StockPool
