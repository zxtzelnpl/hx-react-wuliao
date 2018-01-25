'use strict'

import icon_tx from '../../static/img/icon_tx.png'


import './ChatBox.less'

import React, {Component} from 'react'
import JRoll from 'jroll'
import EmojiPicker from './EmojiPicker'
import CaiTiaoPicker from './CaiTiaoPicker'
import {get_chat,get_message,upload_img} from '../../config/urls'

const message_datas = [
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  },
  {
    name: '田语晨',
    time: '20:46',
    content: '老师讲课很棒帮哦'
  }
]

const MessageItem = ({name, time, content}) => {
  return (
      <div className="messageItem">
        <div className="head">
          <img src={icon_tx}/>
          <span className="name">{name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="content">
          {content}
        </div>
      </div>
  )
}

class ChatBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      __html: '请输入你想说的话',
      picker: ''
    }
  }


  componentDidMount () {

    fetch(get_chat,{method:'GET',credentials:'include'})
        .then(res=>res.json())
        .then(json=>{
          console.log(json)
        })


    let init = {
      scrollBarY: true,
      scrollBarFade: true
    }
    this.jroll = new JRoll('#message', init)
  }

  keyUp (e) {
    if (e.keyCode === 13) {
      this.sendMessage()
    }
  }

  sendMessage () {
    console.log(this.input.innerHTML)
  }

  pickerShow (picker) {
    this.setState((state) => {
      let prePicker = state.picker
      let nextPicker = ''
      if (picker !== prePicker) {
        nextPicker = picker
      }
      return {
        picker: nextPicker
      }
    })
  }

  addEmoji (e) {
    let htmlStr = this.input.innerHTML
    let url = e.target.src
    htmlStr += `<img src=${url} />`
    this.input.innerHTML = htmlStr
  }

  sendCaitiao () {

  }

  fileChange (e) {
    let img = e.target.files[0]
        , formData = new FormData()
    formData.append('upload_img', img)
    fetch(upload_img, {
      method: 'POST',
      credentials: 'include',
      body: formData
    })
        .then(res => res.json())
        .then(json => {
          console.log(json)
        })
  }

  render () {
    let messages_html = message_datas.map((data, index) => {
      return <MessageItem key={index} {...data} />
    })
    return (
        <div className="chat-box">
          <div id="message" className="messages-wrap">
            <div className="messages">
              {messages_html}
            </div>
          </div>
          <div className="blank-h-20"/>
          <div className="chat-wrap">
            <div className="chat">
              <div
                  className="input-box"
                  contentEditable={true}
                  dangerouslySetInnerHTML={{__html: this.state.__html}}
                  ref={input => {
                    this.input = input
                  }}
                  onKeyUp={this.keyUp.bind(this)}
              />
              <div className="toolbar">
                <div className="emoji" onClick={this.pickerShow.bind(this, 'emoji')}/>
                <div className="caitiao" onClick={this.pickerShow.bind(this, 'caitiao')}/>
                <div className="pic"><label><input
                    type="file"
                    onChange={this.fileChange.bind(this)}/></label></div>
                <div className="send-btn" onClick={this.sendMessage.bind(this)}>
                  发送
                </div>
              </div>
            </div>
            {this.state.picker === 'emoji' && <EmojiPicker onClick={this.addEmoji.bind(this)}/>}
            {this.state.picker === 'caitiao' && <CaiTiaoPicker onClick={this.sendCaitiao.bind(this)}/>}
          </div>
        </div>
    )
  }
}

export default ChatBox
