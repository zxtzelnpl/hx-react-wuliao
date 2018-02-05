'use strict'

import './Content.less'

import React, {Component} from 'react'
import Loading from '../Loading'

class Content extends Component {

  componentDidUpdate(){

  }

  render() {
    let body=this.props.body
        ,content_html=<Loading />
    if(body){
      if(body.content){
        content_html= (
            <div className="innerWrap">
              <div className="content-head">
                {body.title}
              </div>
              <div className="content-in" dangerouslySetInnerHTML={{__html:body.content}} />
            </div>
        )
      }else if(body.filepath){
        content_html= (
            <div className="content">
              <p>
                <span className="download">下载</span>
              </p>
              <iframe src={this.props.body.filepath} frameBorder="0" />
            </div>
        )
      }else{
        content_html = (
            <div>暂无数据</div>
        )
      }
    }
    return content_html
  }
}

export default Content