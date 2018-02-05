'use strict'

import './StockAnalyzeContent.less'

import React, {Component} from 'react'
import Loading from '../Loading'

class StockAnalyzeContent extends Component {
  componentDidMount(){

  }

  render () {
    let body=this.props.body
        ,content_html=<Loading />
    if(body){
      if(body.content){
        content_html = (
            <div className="stock-analyze-content-body">
              <div className="head">
                {body.title}
                {body.filepath&&<a className="download" href={body.filepath}>下载</a>}
              </div>
              <div className="in">
                {body.content}
              </div>
            </div>
        )
      }
      else if(body.filepath){
        content_html = (
            <div className="innerWrap">
              <div className="stock-analyze-content-title">
                <p>
                  {body.title}
                </p>
                <a className="download" href={body.filepath}>下载</a>
              </div>
              <div className="blank-w-20"/>
            </div>
        )
      }
      else{
        content_html = (
            <div>暂无数据</div>
        )
      }
    }
    return (
        <div className="stock-analyze-content">
          {content_html}
        </div>
    )
  }
}

export default StockAnalyzeContent
