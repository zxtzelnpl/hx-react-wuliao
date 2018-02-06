'use strict'

import './Video.less'

import React, {Component} from 'react'

class Video extends Component {
  render () {
    return (
        <ul className="video-program-content">
          <li>
            <p>
              互动：中天科技 信维通信 享通光电
            </p>
            <span className="download">下载</span>
            <span className="play-video">观看视频</span>
          </li>
        </ul>
    )
  }
}

export default Video
