'use strict'

import './Selection.less'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Selection extends Component {
  constructor(props){
    super(props)
    this.state={
      show:false
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
    let value = e.target.innerHTML
    this.props.onSelect(value)
    this.setState({
      show:false
    })
  }

  _renderItem(data,index){
    return <li className="zxt-selection-item" key={index}>{data}</li>
  }

  render () {
    let _datas = this.props.datas.filter(data=>{
      return data!==this.props.selected
    })
    let items = _datas.map(this._renderItem.bind(this))
    let selectClassName=this.state.show?'zxt-selection on':'zxt-selection'
    return (
        <div className={selectClassName}>
          <p className="zxt-selection-selected"
              onClick={this.onClick.bind(this)}>{this.props.selected}</p>
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
