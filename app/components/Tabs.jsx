'use strict'

import './Tabs.less'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Tabs extends Component {
  constructor (props){
    super(props)
    this._renderItem = this._renderItem.bind(this)
    this.state={
      selected:this.props.selected
    }
  }

  _renderItem(data,index){
    let className='zxt-tabs-item';
    if(index === this.state.selected){
      className += ' on'
    }
    return <p className={className} key={index} onClick={this.onClick.bind(this,data,index)}>{data}</p>
  }

  onClick(data,index){
    this.props.onChange(data)
    this.setState({
      selected:index
    })
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

Tabs.PropTypes={
  datas:PropTypes.array.isRequired,
  selectd:PropTypes.number.isRequired,
  onChange:PropTypes.func.isRequired
}

export default Tabs
