'use strict'

import './MediaVideo.less'

import React, {Component} from 'react'
import ContentWithPagination from '../ContentWithPagination'
import {api_experience, api_experience_count} from '../../config/urls'

class MediaVideo extends Component {
  constructor(props) {
    super(props)
    this.limit = 18
    this.type = 3
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
    let count_url = `${api_experience_count}/${this.props.location}/${this.type}`
    let data_url = `${api_experience}/${this.props.location}/${this.type}/${start}/${this.limit}`
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
    let data_url = `${api_experience}/${this.props.location}/1/${start}/${this.limit}`
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
        <div className="experience-media-video">
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

export default MediaVideo
