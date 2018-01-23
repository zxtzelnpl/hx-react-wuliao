'use strict'

import './EmojiPicker.less'

import React, {Component} from 'react'

const pre = 'http://public.jyzqsh.com/emoji/tieba/'
const emojis=[]
for(let i=1;i<=50;i++){
  emojis.push(`${pre}${i}.jpg`)
}

class EmojiPicker extends Component {
  constructor (){
    super()
    this._render=this._render.bind(this)
  }

  _render(url,index){
    return <img key={index} src={url} onClick={this.props.onClick}/>
  }

  render () {
    let emojis_imgs = emojis.map(this._render)
    return (
        <div className="emoji-picker">
          {emojis_imgs}
        </div>
    )
  }
}

export default EmojiPicker
