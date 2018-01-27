'use strict'

//视频回播
import './PlayBackContent.less'

import React, {Component} from 'react'
import ContentWithPagination from '../ContentWithPagination'
import {play_back as data_url_api , play_back_count as count_url_api} from '../../config/urls'

class PlayBackContent extends Component {
  constructor(props) {
    super(props)
    this.limit = 18
    this.state = {
      page: 1,
      count: 0,
      datas: [],
      isPageLoading: false
    }
  }

  componentDidMount(){
    this.setState({
      isPageLoading:true
    })
    let start = this.state.page - 1
    let count_url = `${count_url_api}/${this.props.location}`
    let data_url = `${data_url_api}/${this.props.location}/${start}/${this.limit}`
    let count_fetch = fetch(count_url, {method: 'get', credentials: 'include'})
        .then(res => res.json())
    let data_fetch = fetch(data_url, {method: 'get', credentials: 'include'})
        .then(res => res.json())
    Promise
        .all([count_fetch, data_fetch])
        .then(([count, datas]) => {
          console.log(datas)
          if(count>0&&datas.length>0){
            this.setState({
              count,
              datas,
              isPageLoading:false
            })
          }
          else{
            this.setState({
              isPageLoading:false
            })
          }
        })
        .catch(err=>{
          this.setState({
            isPageLoading:false
          })
        })
  }

  loadPage(page) {
    this.setState({
      page,
      isPageLoading: true
    })
    let start = (page - 1) * 12
    let data_url = `${data_url_api}/${this.props.location}/${start}/${this.limit}`
    fetch(data_url, {method: 'get', credentials: 'include'})
        .then(res => res.json())
        .then(datas => {
          this.setState({
            datas,
            isPageLoading:false
          })
        })
  }

  render () {
    return (
        <div className="play-back-content">
          <ContentWithPagination
              count={this.state.count}
              datas={this.state.datas}
              limit={this.limit}
              page={this.state.page}
              isPageLoading={this.state.isPageLoading}
              loadPage={this.loadPage.bind(this)}
          />
        </div>
    )
  }
}

export default PlayBackContent
