'use strict'

import './ReSearch.less'

import React, {Component} from 'react'
import Head from '../components/research/Head'
import Selection from '../components/Selection'
import StockItem from '../components/research/StockItem'

class ReSearch extends Component {
  constructor (props){
    super(props)
    this.primarySelectionStock=['103期','104期','105期']
    this.handPick=['903期','904期','905期']
    this.stocks=[
      {title:'中国巨石',code:'600176',content:'<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, reiciendis vel! Ad adipisci alias aliquid, autem, beatae consequuntur dolor eaque eum fugit libero obcaecati, officiis quis repellat reprehenderit rerum veniam?</div>'},
      {title:'中国巨石',code:'600176',content:'<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis fugiat harum illo illum mollitia nobis officiis omnis perspiciatis tenetur! Cupiditate eius placeat repellendus reprehenderit. Ea illo reiciendis veritatis. Itaque?</div>'},
      {title:'中国巨石',code:'600176',content:'<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias at aut cupiditate delectus distinctio eum illum incidunt laboriosam, nemo pariatur quia quibusdam ratione repellendus repudiandae sapiente tenetur velit voluptas.</div>'},
      {title:'中国巨石',code:'600176',content:'<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium corporis culpa delectus deleniti dolores enim error excepturi fugiat, iste minus non officiis quaerat quidem, recusandae tempore tenetur vitae, voluptatem?</div>'},
      {title:'中国巨石',code:'600176',content:'<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis hic id possimus quia quidem, quod temporibus? Accusantium autem est ex expedita facere, ipsum laborum libero obcaecati sed unde voluptatibus?</div>'}
    ]
  }

  primarySelectionStockChange(item){
    console.log(item)
  }

  handPickChange(item){
    console.log(item)
  }

  _renderStockItem(stock,index){
    let {title,code,content} = stock
    return (
        <li key={index}>
          <p className="title">
            {title}
            <span>({code})</span>
          </p>
          <div dangerouslySetInnerHTML={{__html:content}}/>
        </li>
    )
  }

  render () {
    let stocks_one=[],
        stocks_two=[],
        stocks_three=[];

    this.stocks.map((stock,index)=>{
      if(index%3===0){
        stocks_one.push(<StockItem stock={stock} key={index}/>)
      }
      else if(index%3===1){
        stocks_two.push(<StockItem stock={stock} key={index}/>)
      }
      else if(index%3===2){
        stocks_three.push(<StockItem stock={stock} key={index}/>)
      }

    })

    return (
        <div className="container-research">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
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
              <p className="text">一共筛选出<span>5</span>个初选股票</p>
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
        </div>
    )
  }
}

export default ReSearch
