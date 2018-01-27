'use strict'

import './ReportContent.less'

import React, {Component} from 'react'
import Loading from '../Loading'

class ReportContent extends Component {
  render() {
    let body=this.props.body
        ,content_html=<Loading />
    if(body){
      if(body.filepath&&body.title){
        content_html=(
            <ul className="stock-report-wrap">
              <li>
                <p>
                  {body.title}
                </p>
                <a className="download" href={body.filepath}>下载</a>
              </li>
            </ul>)
      }
      else{
        content_html = (
            <div>暂无数据</div>
        )
      }
    }
    return (
        <div className="stock-report-content">
          {content_html}
        </div>
    )
  }
}

export default ReportContent