'use strict'

import './PlayBack.less'

import React, {Component} from 'react'
import Head from '../components/playback/Head'
import PlayBackContent from '../components/playback/PlayBackContent'

class PlayBack extends Component {
  render () {
    return (
        <div className="container-play-back">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
          <PlayBackContent />
        </div>
    )
  }
}

export default PlayBack
