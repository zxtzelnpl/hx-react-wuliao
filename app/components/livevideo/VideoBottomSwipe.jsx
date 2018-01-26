'use strict'

import './VideoBottomSwipe.less'

import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'
import {video_banners} from '../../config/urls'

class VideoBottomSwipe extends Component {
  constructor () {
    super()
    this.state = {
      load: false,
      imgs: []
    }
  }

  componentDidMount () {
    fetch(video_banners, {method: 'GET', credentials: 'include'})
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.setState({
            load:true,
            imgs:json
          })
        })
  }

  render () {
    let imgs = this.state.imgs
        , banner_html
    if (!this.state.load) {
      banner_html = ''
    } else if (imgs.length === 0) {
      banner_html = ''
    } else {
      let imgs_html = imgs.map(img => <img className="item" key={img.id} src={img.path}/>)
          banner_html = <ReactSwipe className="carousel"
                                    key={imgs_html.length}
                                    swipeOptions={{
                                      speed: 800,
                                      auto: 2000,
                                      continuous: true
                                    }}
          >
            {imgs_html}
          </ReactSwipe>
    }
    return (
        <div className="video-bottom-swipe">
          {banner_html}
        </div>
    )
  }
}

export default VideoBottomSwipe
