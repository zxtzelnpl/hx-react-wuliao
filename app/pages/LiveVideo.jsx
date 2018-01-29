'use strict'

import './LiveVideo.less'

import React, {Component} from 'react'
import Head from '../components/livevideo/Head'
import Video from '../components/livevideo/Video'
import VideoBottomSwipe from '../components/livevideo/VideoBottomSwipe'
import ChatBox from '../containers/livevideo/ChatBox'

class LiveVideo extends Component {
  render () {
    return (
        <div className="container-live-video">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
          <div className="layout-left">
            <Video />
            <div className="blank-h-20" />
            <VideoBottomSwipe />
          </div>
          <div className="layout-right">
            <ChatBox />
          </div>
        </div>
    )
  }
}

export default LiveVideo
