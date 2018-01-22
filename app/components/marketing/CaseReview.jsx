'use strict'

import './CaseReview.less'

import React, {Component} from 'react'
import Pages from '../Pages'

class CaseReview extends Component {
  render () {
    return (
        <div className="marketing-case-review">
          <Pages selected={0}/>
          <div className="blank-w-20"/>
          <div className="case-review-content">
            <p>
              <span className="download">下载</span>
            </p>
            <img src="" alt=""/>
          </div>
        </div>
    )
  }
}

export default CaseReview
