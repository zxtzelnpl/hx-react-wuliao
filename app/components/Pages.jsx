'use strict'

import './Pages.less'

import React, {Component} from 'react'

const PageA = ({className, i}) => {
  return <p className={className}>{i}</p>
}

class Pages extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  onClick (e) {
    let str = e.target.innerHTML
    if (str === '...') {

    }
    else if (str === '&gt;') {
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

  _renderPagination () {
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

  render () {
    let {datas} = this.props
    let lists = datas.map((data, index) => {
      let className = '';
      if (index === this.props.article) {
        className = 'on'
      }
      return <li className={className} key={data.id}>{data.title}</li>
    })
    return (
        <div className="zxt-pages">
          <ul className="zxt-pages-list">
            {lists}
          </ul>
          <div className="blank-h-20"/>
          <div className="zxt-pages-num">
            <div className="inner-wrap" onClick={this.onClick.bind(this)}>
              {this._renderPagination.call(this)}
            </div>
          </div>
        </div>
    )
  }
}

export default Pages
