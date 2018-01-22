'use strict'

import './VideoProgram.less'

import React, {Component} from 'react'
import Pages from '../Pages'

class VideoProgram extends Component {
  render () {
    return (
        <div className="marketing-video-program">
          <Pages selected={0}/>
          <div className="blank-w-20"/>
          <ul className="video-program-content">
            <li>
              <p>
                互动：中天科技 信维通信 享通光电
              </p>
              <span className="download">下载</span>
              <span className="play-video">观看视频</span>
            </li>
          </ul>
        </div>
    )
  }
}

export default VideoProgram
