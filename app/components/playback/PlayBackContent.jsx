'use strict'

//视频回播
import './PlayBackContent.less'

import React, {Component} from 'react'
import right_arrow from '../../static/img/icon_other_right.png'

let datas = []
for (let i = 0; i < 18; i++) {
  datas.push('2018-01-' + (i + 1))
}

class PlayBackContent extends Component {
  render () {
    let lists = datas.map((data, index) => {
      let className='';
      if(index === this.props.selected){
        className='on'
      }
      return <li className={className} key={index}>{data}<img src={right_arrow}/></li>
    })
    return (
        <div className="play-back-content">
          <ul className="zxt-pages-list">
            {lists}
          </ul>
          <div className="blank-h-70" />
          <div className="zxt-pages-num">
            <p className="on">1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>...</p>
            <p>100</p>
            <p>&gt;</p>
          </div>
        </div>
    )
  }
}

export default PlayBackContent
