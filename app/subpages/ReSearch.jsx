'use strict'

import './ReSearch.less'

import React, {Component} from 'react'
import Head from '../components/research/Head'
import StockPool from '../containers/research/StockPool'

class ReSearch extends Component {
  render () {
    return (
        <div className="container-research">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
          <StockPool />
        </div>
    )
  }
}

export default ReSearch
