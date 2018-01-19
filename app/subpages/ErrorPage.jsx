'use strict'
import './ErrorPage.less'
import React from 'react'

export default class ErrorPage extends React.PureComponent{
  render(){
    return (
      <div className="ErrorPage">
        <div className="innerWrap">
          <h1>哎呀</h1>
          <h2>出错啦！</h2>
          <article>
            <p>可能原因：</p>
            <p>
            {this.props.err.message}
            </p>
            <p>
              {this.props.err.stack?this.props.err.stack:''}
            </p>
          </article>
        </div>
      </div>
    )
  }
}