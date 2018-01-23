'use strict'

import './CaiTiaoPicker.less'

import React, {Component} from 'react'

const pre = 'http://public.jyzqsh.com/caitiao/'
const imgs=[]
for(let i=1;i<=9;i++){
  imgs.push(`${pre}${i}.gif`)
}

class CaiTiaoPicker extends Component {
  constructor (){
    super()
    this._render=this._render.bind(this)
  }

  _render(url,index){
    return <img key={index} src={url} onClick={this.props.onClick}/>
  }

  render () {
    let imgs_html = imgs.map(this._render)
    return (
        <div className="caitiao-pikcer">
          {imgs_html}
        </div>
    )
  }
}

export default CaiTiaoPicker
