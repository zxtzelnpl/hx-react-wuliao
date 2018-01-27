'use strict'

import React, {Component} from 'react'
import Loading from '../Loading'

class StrategyContent extends Component {

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
            <div className="innerWrap">
              <div className="content-head">
                {body.title}
                <a className="download" href={body.filepath}>下载</a>
              </div>
            </div>
        )
      }else{
        content_html = (
            <div>暂无数据</div>
        )
      }
    }
    console.log(body)
    return (
        <div className="content">
          {content_html}
        </div>
    )
  }
}

export default StrategyContent