'use strict'

import './StockAnalyze.less'

import React, {Component} from 'react'
import Pages from '../Pages'
import {api_customer_service as data_url_api , api_customer_service_count as count_url_api} from '../../config/urls'

class StockAnalyze extends Component {
  constructor(props) {
    super(props)
    this.limit = 12
    this.type = 1
    this.state = {
      article: 0,
      page: 1,
      count: 0,
      datas: [],
      body: null,
      isPageLoading: false
    }
  }

  initialPage(){
    this.setState({
      article: 0,
      page: 1,
      count: 0,
      datas: [],
      body: null,
      isPageLoading:true
    })
    let start = this.state.page - 1
    let count_url = `${count_url_api}/${this.props.location}/${this.type}`
    let data_url = `${data_url_api}/${this.props.location}/${this.type}/${start}/${this.limit}`
    let count_fetch = fetch(count_url, {method: 'get', credentials: 'include'})
        .then(res => res.json())
    let data_fetch = fetch(data_url, {method: 'get', credentials: 'include'})
        .then(res => res.json())
    Promise
        .all([count_fetch, data_fetch])
        .then(([count, datas]) => {
          if(count>0&&datas.length>0){
            let body =datas[this.state.article]
            this.setState({
              count,
              datas,
              body,
              isPageLoading:false
            })
          }
          else{
            this.setState({
              body:{},
              isPageLoading:false
            })
          }
        })
        .catch(err=>{
          this.setState({
            body:{},
            isPageLoading:false
          })
        })
  }

  loadPage(page) {
    this.setState({
      article:null,
      page,
      isPageLoading: true
    })
    let start = (page - 1) * 12
    let data_url = `${data_url_api}/${this.props.location}/${this.type}/${start}/${this.limit}`
    fetch(data_url, {method: 'get', credentials: 'include'})
        .then(res => res.json())
        .then(datas => {
          this.setState({
            datas,
            isPageLoading:false
          })
        })
  }

  changeArticle(article) {
    this.setState(({datas})=>{
      return {
        article,
        body:datas[article]
      }
    })
  }

  componentDidMount(){
    this.initialPage()
  }

  componentDidUpdate(prevProps){
    let pre_location = prevProps.location
    let location = this.props.location
    if(pre_location!==location){
      this.initialPage()
    }
  }

  render () {
    return (
        <div className="customer-stock-analyze">
          <Pages
              count={this.state.count}
              datas={this.state.datas}
              limit={this.limit}
              page={this.state.page}
              article={this.state.article}
              isPageLoading={this.state.isPageLoading}
              loadPage={this.loadPage.bind(this)}
              changeArticle={this.changeArticle.bind(this)}
          />
          <div className="blank-w-20"/>
          <div className="stock-analyze-content">
            <div className="stock-analyze-content-title">
              <p>
                20180104池中的票文件
              </p>
              <span className="download">下载</span>
            </div>
            <div className="blank-w-20"/>
            <div className="stock-analyze-content-body">
              <div className="head">
                2018-01-04 池中的票解读
                <span className="download">下载</span>
              </div>
              <div className="in">
                从大盘的技术面来看，今天没有什么亮点，大盘高开后一路低走，最终收于5日均线下方，从15分钟和30分钟来看，最后半小时形成一个短线介入位置，明日早盘高开的概率更大，目前短线受制于3800和今天高开3975点。

                从板块来看，银行 两桶油 保险 券商
                工程建设等权重板块得到了护盘资金关照，特别是两桶油的拉升让创业及中小板雪上加霜，500只上涨，接近2000只下跌，并且1000只在跌停位置，明日大蓝筹继续走强的概率更大，中小板及创业板应该在局面得到控制或者稳定后才可能有像样的反弹。

                今天主要介入为券商，标的股票600030 600837，5日上方持股原则。
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam assumenda at, corporis doloremque
                eaque ex facilis labore numquam odit officiis placeat recusandae velit voluptates voluptatibus! Debitis
                dolorem eveniet facere?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam assumenda at, corporis doloremque
                eaque ex facilis labore numquam odit officiis placeat recusandae velit voluptates voluptatibus! Debitis
                dolorem eveniet facere?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam assumenda at, corporis doloremque
                eaque ex facilis labore numquam odit officiis placeat recusandae velit voluptates voluptatibus! Debitis
                dolorem eveniet facere?
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default StockAnalyze
