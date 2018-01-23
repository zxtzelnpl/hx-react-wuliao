'use strict'

import './VideoBottomSwipe.less'

import React, {Component} from 'react'
import ReactSwipe from 'react-swipe'

class VideoBottomSwipe extends Component {
  render () {
    return (
        <div className="video-bottom-swipe">
          <ReactSwipe className="carousel"
                      swipeOptions={{
                        speed: 400,
                        auto: 1000,
                        continuous: true
                      }}
                      ref={swipe=>{this.swipe = swipe}}
          >
            <div className="item">PANE 1</div>
            <div className="item">PANE 2</div>
            <div className="item">PANE 3</div>
          </ReactSwipe>
        </div>
    )
  }
}

export default VideoBottomSwipe
