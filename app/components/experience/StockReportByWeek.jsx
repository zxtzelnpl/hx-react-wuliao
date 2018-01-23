'use strict'

import './StockReport.less'

import React, {Component} from 'react'
import Pages from '../Pages'

class StockReportByWeek extends Component {
  render () {
    return (
        <div className="experience-stock-report">
          <Pages selected={0}/>
          <div className="blank-w-20"/>
          <ul className="stock-report-content">
            <li>
              <p>
                周评2017年12月22日
              </p>
              <span className="download">下载</span>
            </li>
          </ul>
        </div>
    )
  }
}

export default StockReportByWeek