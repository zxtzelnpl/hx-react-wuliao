'use strict'

import './StockItem.less'

import React, {Component} from 'react'

class StockItem extends Component {
  constructor (){
    super()
    this.state={
      show:false
    }
  }

  onClick(){
    this.setState((state)=>{
      return {
        show:!state.show
      }
    })
  }


  render () {
    let {name,code,content} = this.props.stock
    let itemClassName=this.state.show?'stock-item on':'stock-item'
    return (
        <li className={itemClassName}>
          <p className="title" onClick={this.onClick.bind(this)}>
            {name}
            <span>({code})</span>
          </p>
          <div className="content" dangerouslySetInnerHTML={{__html:content}}/>
        </li>
    )
  }
}

export default StockItem
