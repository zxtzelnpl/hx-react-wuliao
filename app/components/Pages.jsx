'use strict'

import './Pages.less'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'

class Pages extends Component {
  constructor(props) {
    super(props)
  }

  onPaginationClick(e) {
    if (e.target.nodeName === 'P'&&!this.props.isPageLoading) {
      let str = e.target.innerHTML
      if (str === '&gt;') {
        let page = this.props.page + 1
        this.props.loadPage(page)
      }
      else if (str === '&lt;') {
        let page = this.props.page - 1
        this.props.loadPage(page)
      }
      else {
        let page = parseInt(str)
        this.props.loadPage(page)
      }
    }
  }

  onItemClick(e) {
    let li = e.target
    if (li.nodeName === 'LI') {
      let article
          , lis = e.target.parentNode.childNodes
          , len = lis.length
      for (let i = 0; i < len; i++) {
        if (li === lis[i]) {
          article = i
          return this.props.changeArticle(article)
        }
      }
    }
  }

  _renderPagination() {
    let {count, limit, page} = this.props
        , box_len = 8
        , page_count = Math.ceil(count / limit)
        , page_half = page_count / 2
        , _html = []
    if (page_count <= 8) {
      for (let i = 1; i <= page_count; i++) {
        if (page === i) {
          _html.push(<p key={i} className="on">{i}</p>)
        }
        else {
          _html.push(<p key={i}>{i}</p>)
        }
      }
    }
    else if (page === 1) {
      _html.push(<p key={page} className="on">{page}</p>)
      _html.push(<p key={2}>2</p>)
      _html.push(<p key={3}>3</p>)
      _html.push(<p key={4}>4</p>)
      _html.push(<p key={5}>5</p>)
      _html.push(<span key={'no-choice-next'} className="no-choice">...</span>)
      _html.push(<p key={page_count}>{page_count}</p>)
      _html.push(<p key={'next'}>&gt;</p>)
    }
    else if (page === 2) {
      _html.push(<p key={'prev'}>&lt;</p>)
      _html.push(<p key={1}>1</p>)
      _html.push(<p key={2} className="on">2</p>)
      _html.push(<p key={3}>3</p>)
      _html.push(<p key={4}>4</p>)
      _html.push(<span key={'no-choice-next'} className="no-choice">...</span>)
      _html.push(<p key={page_count}>{page_count}</p>)
      _html.push(<p key={'next'}>&gt;</p>)
    }
    else if (page === page_count) {
      _html.push(<p key={'prev'}>&lt;</p>)
      _html.push(<p key={1}>1</p>)
      _html.push(<span key={'no-choice-prev'} className="no-choice">...</span>)
      _html.push(<p key={page_count - 4}>{page_count - 4}</p>)
      _html.push(<p key={page_count - 3}>{page_count - 3}</p>)
      _html.push(<p key={page_count - 2}>{page_count - 2}</p>)
      _html.push(<p key={page_count - 1}>{page_count - 1}</p>)
      _html.push(<p key={page_count} className="on">{page_count}</p>)
    }
    else if (page === page_count - 1) {
      _html.push(<p key={'prev'}>&lt;</p>)
      _html.push(<p key={1}>1</p>)
      _html.push(<span key={'no-choice-prev'} className="no-choice">...</span>)
      _html.push(<p key={page_count - 3}>{page_count - 3}</p>)
      _html.push(<p key={page_count - 2}>{page_count - 2}</p>)
      _html.push(<p className="on" key={page_count - 1}>{page_count - 1}</p>)
      _html.push(<p key={page_count}>{page_count}</p>)
      _html.push(<p key={'next'}>&gt;</p>)
    }
    else {
      _html.push(<p key={'prev'}>&lt;</p>)
      _html.push(<p key={1}>1</p>)
      _html.push(<span key={'no-choice-prev'} className="no-choice">...</span>)
      if (page > page_half) {
        _html.push(<p key={page - 1}>{page - 1}</p>)
        _html.push(<p className="on" key={page}>{page}</p>)
      }
      else {
        _html.push(<p className="on" key={page}>{page}</p>)
        _html.push(<p key={page + 1}>{page + 1}</p>)
      }
      _html.push(<span key={'no-choice-next'} className="no-choice">...</span>)
      _html.push(<p key={page_count}>{page_count}</p>)
      _html.push(<p key={'next'}>&gt;</p>)
    }
    return _html
  }

  _renderItems() {
    let lists = this.props.datas.map((data, index) => {
      let className = '';
      if (index === this.props.article) {
        className = 'on'
      }
      return <li className={className} key={data.id}>{data.title}</li>
    })
    if(lists.length>0){
      return (
          <ul className="inner-wrap" onClick={this.onItemClick.bind(this)}>
            {lists}
          </ul>
      )
    }else{
      return <div>暂无数据</div>
    }

  }

  render() {
    let {datas, article, isPageLoading} = this.props
    let lists = datas.map((data, index) => {
      let className = '';
      if (index === article) {
        className = 'on'
      }
      return <li className={className} key={data.id}>{data.title}</li>
    })
    return (
        <div className="zxt-pages-nav-left">
          <div className="zxt-pages-list">
            {this._renderItems()}
            {isPageLoading && <Loading/>}
          </div>
          <div className="blank-h-20"/>
          <div className="zxt-pages-num">
            <div className="inner-wrap" onClick={this.onPaginationClick.bind(this)}>
              {this._renderPagination()}
            </div>
          </div>
        </div>
    )
  }
}

Pages.propTyeps = {
  count:PropTypes.number.isRequired,
  limit:PropTypes.number.isRequired,
  page:PropTypes.number.isRequired,
  article:PropTypes.number.isRequired,
  isPageLoading:PropTypes.bool.isRequired,
  loadPage:PropTypes.func.isRequired,
  changeArticle:PropTypes.func.isRequired,
}
export default Pages
