'use strict'

import './PromotionalMaterial.less'

import React, {Component} from 'react'
import Pages from '../Pages'

class PromotionalMaterial extends Component {
  render () {
    return (
        <div className="marketing-promotional-material">
          <Pages selected={0}/>
          <div className="blank-w-20"/>
          <div className="promotional-material-content">
            <p>
              <span className="download">下载</span>
            </p>
            <img src="" alt=""/>
          </div>
        </div>
    )
  }
}

export default PromotionalMaterial
