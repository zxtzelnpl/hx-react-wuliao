'use strict'

import './StockReport.less'

import React, {Component} from 'react'
import Pages from '../Pages'
import ReportContent from './ReportContent'
import {api_experience as data_url_api , api_experience_count as count_url_api} from '../../config/urls'

class StockReportAnnual extends Component {
  constructor(props) {
    super(props)
    this.limit = 12
    this.type = 2
    this.state = {
      article: 0,
      page: 1,
      count: 0,
      datas: [],
      body: null,
      isPageLoading: false
    }
  }

  componentDidMount(){
    this.initialPage()
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

  componentDidUpdate(prevProps){
    let pre_location = prevProps.location
    let location = this.props.location
    if(pre_location!==location){
      this.initialPage()
    }
  }

  render () {
    return (
        <div className="experience-stock-report">
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
          <ReportContent
              body={this.state.body}
          />
        </div>
    )
  }
}

export default StockReportAnnual
