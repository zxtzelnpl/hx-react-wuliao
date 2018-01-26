'use strict'

import './Loading.less'

import refresh from '../static/img/refresh.png'

import React, {Component} from 'react'

class Loading extends Component {
  render() {
    return (
        <div className='loading'>
          <img src={refresh}/>
        </div>
    )
  }
}

export default Loading