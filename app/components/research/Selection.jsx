'use strict'

import './Selection.less'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {trimAll} from '../../static/tools'

class Selection extends Component {
  constructor(props){
    super(props)
    this.state={
      show:false,
      selected:this.props.datas[0].qishu
    }
  }

  onClick(){
    this.setState(state=>{
      return {
        show:!state.show
      }
    })
  }

  onSelect(e){
    let str = e.target.innerHTML
    let value = str.split(' ')[1]
    this.props.onSelect(value)
    this.setState({
      show:false,
      selected :value
    })
  }

  _renderItem(data,index){
    let period = trimAll(data.qishu)
    return <li className="zxt-selection-item" key={index}>第 {period} 期</li>
  }

  render () {
    let {datas} = this.props
    let {selected} = this.state
    let _datas = datas.filter(data=>{
      return data.qishu!==this.state.selected
    })
    let items = _datas.map(this._renderItem.bind(this))
    let selectClassName=this.state.show?'zxt-selection on':'zxt-selection'
    return (
        <div className={selectClassName}>
          <p className="zxt-selection-selected"
             onClick={this.onClick.bind(this)}>第 {trimAll(selected)} 期</p>
          <ul
              className="zxt-selection-box"
              onClick={this.onSelect.bind(this)}
          >
            {items}
          </ul>
        </div>
    )
  }
}

Selection.propTyeps = {
  datas:PropTypes.array.isRequired,
  onSelect:PropTypes.func.isRequired,
  selected:PropTypes.string.isRequired
}

export default Selection
