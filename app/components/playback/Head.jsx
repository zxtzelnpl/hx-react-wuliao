'use strict'

import './Head.less'

import React, {Component} from 'react'

import Risk from '../Risk'

class Head extends Component {
  render () {
    return (
        <div className="playback-head">
          <h4>
            强势优选
          </h4>
          <Risk />
        </div>
    )
  }
}

export default Head
