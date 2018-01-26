'use strict'

import './StockPool.less'

import React, {Component} from 'react'
import Selection from '../Selection'
import StockItem from '../research/StockItem'

class StockPool extends Component {
  constructor (){
    super()
    this.primarySelectionStock=['103期','104期','105期']
    this.handPick=['903期','904期','905期']
  }

  primarySelectionStockChange(item){
    let location = this.props.location === '上海'?1:0
        ,periods = 60
        ,type=0
    this.props.researchActions.fetchIfNeeded({
      location,
      periods,
      type
    })
  }

  handPickChange(item){
    let location = this.props.location === '上海'?1:0
        ,periods = 60
        ,type=1
    this.props.researchActions.fetchIfNeeded({
      location,
      periods,
      type
    })
  }

  render () {
    let stocks_one=[],
        stocks_two=[],
        stocks_three=[],
        stocks = this.props.data,
        stocks_num = stocks.length
    stocks.forEach((stock,index)=>{
      if(index%3===0){
        stocks_one.push(<StockItem stock={stock} key={stock.id}/>)
      }
      else if(index%3===1){
        stocks_two.push(<StockItem stock={stock} key={stock.id}/>)
      }
      else if(index%3===2){
        stocks_three.push(<StockItem stock={stock} key={stock.id}/>)
      }
    })
    return (
        <div className="stock-pool">
          <div className="stock-pool-head">
            <div className="stock-pool-head-box primary-selection-stock">
              <p className="title">初选股票池sh</p>
              <Selection
                  datas={this.primarySelectionStock}
                  selected={this.primarySelectionStock[0]}
                  onSelect={this.primarySelectionStockChange.bind(this)}
              />
            </div>
            <div className="stock-pool-head-box hand-pick">
              <p className="title">精选股票池sh</p>
              <Selection
                  datas={this.handPick}
                  selected={this.handPick[0]}
                  onSelect={this.handPickChange.bind(this)}
              />
            </div>
          </div>
          <div className="blank-h-20" />
          <div className="stock-pool-neck">
            <p className="text">一共筛选出<span>{stocks_num}</span>个初选股票</p>
            <p className="download">下载</p>
          </div>
          <div className="blank-h-20" />
          <div className="stock-pool-content">
            <ul className="stock-content one">
              {stocks_one}
            </ul>
            <div className="blank-w-19" />
            <ul className="stock-content two">
              {stocks_two}
            </ul>
            <div className="blank-w-19" />
            <ul className="stock-content two">
              {stocks_three}
            </ul>
          </div>
        </div>
    )
  }
}

export default StockPool
