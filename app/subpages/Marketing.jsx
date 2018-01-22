'use strict'

import './Marketing.less'

import React, {Component} from 'react'

import Head from '../components/marketing/Head'

class Marketing extends Component {
  render () {
    return (
        <div className="container-marketing">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
        </div>
    )
  }
}

export default Marketing
