'use strict'

import './MediaVideo.less'

import React, {Component} from 'react'

let datas = []
for (let i = 0; i < 18; i++) {
  datas.push('2018-01-' + (i + 1))
}

class MediaVideo extends Component {
  render () {

    let lists = datas.map((data, index) => {
      let className='';
      if(index === this.props.selected){
        className='on'
      }
      return <li className={className} key={index}>{data}</li>
    })
    return (
        <div className="experience-media-video">
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

export default MediaVideo
