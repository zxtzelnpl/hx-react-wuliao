'use strict'

import './Tabs.less'

import React, {Component} from 'react'
import propTypes from 'prop-types'

class Tabs extends Component {
  constructor (props){
    super(props)
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem(data,index){
    let className='zxt-tabs-item';
    if(index === this.props.selected){
      className += ' on'
    }
    return <p className={className} key={index} onClick={this.onClick.bind(this,data,index)}>{data}</p>
  }

  onClick(data,index){
    this.props.onChange(index)
  }

  render () {

    let tabs_html = this.props.datas.map(this._renderItem)
    return (
        <div className="zxt-tabs">
          {tabs_html}
        </div>
    )
  }
}

Tabs.propTypes={
  datas:propTypes.array.isRequired,
  selected:propTypes.number.isRequired,
  onChange:propTypes.func.isRequired
}

export default Tabs
