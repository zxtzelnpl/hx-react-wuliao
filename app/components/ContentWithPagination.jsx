'use strict'

import './ContentWithPagination.less'
import right_arrow from '../static/img/icon_other_right.png'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'

class Pages extends Component {
  constructor(props) {
    super(props)
  }

  onPaginationClick(e) {
    if (e.target.nodeName === 'P') {
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
      return <li key={index}><a href={data.url}>{data.title}<img src={right_arrow}/></a></li>
    })
    if(lists.length>0){
      return (
          <ul className="zxt-pages-list">
            {lists}
          </ul>
      )
    }else{
      return <div>暂无数据</div>
    }

  }

  render() {
    let {isPageLoading} = this.props
    return (
        <div className="zxt-pages-with-content">
          <div className="zxt-pages-list-wrap">
            {this._renderItems()}
            {isPageLoading && <Loading/>}
          </div>
          <div className="blank-h-70" />
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
  isPageLoading:PropTypes.bool.isRequired,
  loadPage:PropTypes.func.isRequired,
}
export default Pages
