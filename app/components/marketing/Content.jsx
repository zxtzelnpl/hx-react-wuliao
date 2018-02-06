'use strict'

import './Content.less'

import React, {Component} from 'react'
import { Document,Page } from 'react-pdf/build/entry.webpack'
import Loading from '../Loading'

class Content extends Component {
  constructor (){
    super()
    this.state = {
      numPages: null,
      pageNumber: 1,
      loading:true
    }
  }

  componentDidUpdate(){

  }

  perPage(){
    this.setState(({numPages,pageNumber})=>{
      let _pageNumber=pageNumber
      if(pageNumber>1){
        _pageNumber = pageNumber-1
      }
      else{
        _pageNumber = numPages
      }
      return {
        pageNumber:_pageNumber
      }
    })
  }

  nextPage(){
    this.setState(({numPages,pageNumber})=>{
      let _pageNumber=pageNumber
      if(pageNumber<numPages){
        _pageNumber = pageNumber+1
      }
      else{
        _pageNumber=1
      }
      return {
        pageNumber:_pageNumber
      }
    })
  }

  onDocumentLoad({numPages}){
    console.log(numPages)
    this.setState({ numPages,loading:false })
  }

  render() {
    let body=this.props.body
        ,content_html=<div />
    const { pageNumber, numPages } = this.state;
    if(body){
      if(body.content){
        content_html= (
            <div className="content hascontent">
              <div className="content-head">
                {body.title}
              </div>
              <div className="content-in" dangerouslySetInnerHTML={{__html:body.content}} />
            </div>
        )
      }else if(body.filepath){
        content_html= (
            <div className="content filepath">
              <p className="title">
                <a className="download" href={this.props.body.filepath}>下载</a>
              </p>
              <Document
                  file={this.props.body.filepath}
                  onLoadSuccess={this.onDocumentLoad.bind(this)}
              >
                <Page
                    pageNumber={pageNumber}
                    width={825}
                />
              </Document>
              <div className="pagination">
                <p onClick={this.perPage.bind(this)}>上一页</p>
                <p>Page {pageNumber} of {numPages}</p>
                <p onClick={this.nextPage.bind(this)}>下一页</p>
              </div>
            </div>
        )
      }
      else{
        content_html = <div>暂无数据</div>
      }
    }
    return <div className="content-wrap">
      {content_html}
    </div>
  }
}

export default Content
