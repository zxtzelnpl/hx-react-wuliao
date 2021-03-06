'use strict'

import {trim} from '../../static/tools'

import './ChatBox.less'

import React, {Component, PureComponent} from 'react'
import JRoll from 'jroll'
import moment from 'moment'
import EmojiPicker from './EmojiPicker'
import CaiTiaoPicker from './CaiTiaoPicker'
import MessageItem from './MessageItem'
import {upload_img} from '../../config/urls'


class ChatBox extends Component {
  constructor (props) {
    super(props)
    this.jroll = null
    this.load_time_control = null
    this.round_time_control = null
    this.moveDirection = ''
    this.state = {
      redis: [],
      picker: ''
    }
  }

  render () {
    let {messages, redis,isFetchingMessage} = this.props
    let messages_html = messages.map((data, index) => {
      return <MessageItem key={index} {...data} />
    })
    let redis_html = redis.map((data, index) => {
      return <MessageItem key={index} {...data} />
    })
    return (
        <div className="chat-box">
          <div id="message" className="messages-wrap">
            <div className="messages">
              <div className="loading">{isFetchingMessage?'加载数据......':''}</div>
              {messages_html.reverse()}
              {redis_html}
            </div>
          </div>
          <div className="blank-h-20"/>
          <div className="chat-wrap">
            <div className="chat">
              <div
                  className="input-box"
                  contentEditable={true}
                  dangerouslySetInnerHTML={{__html: '请输入你想说的话'}}
                  ref={input => {this.input = input}}
                  onKeyUp={this.keyUp.bind(this)}
                  onFocus={this.chatBoxFoucs.bind(this)}
              />
              <div className="toolbar">
                <div className="emoji" onClick={this.pickerShow.bind(this, 'emoji')}/>
                <div className="caitiao" onClick={this.pickerShow.bind(this, 'caitiao')}/>
                <div className="pic">
                  <label>
                    <input
                        type="file"
                        onChange={this.fileChange.bind(this)}/>
                  </label>
                </div>
                <div className="send-btn" onClick={this.sendMessage.bind(this)}>
                  发送
                </div>
              </div>
            </div>
            {this.state.picker === 'emoji' && <EmojiPicker onClick={this.addEmoji.bind(this)}/>}
            {this.state.picker === 'caitiao' && <CaiTiaoPicker onClick={this.addCaitiao.bind(this)}/>}
          </div>
        </div>
    )
  }

  componentDidMount () {
    let that = this
    that.props.chatActions.fetchMessageIfNeeded()
    let init = {
      scrollBarY: true,
      scrollBarFade: true
    }
    that.jroll = new JRoll('#message', init)
    that.jroll.on('scroll', () => {
      if (that.jroll.y > 0) {
        clearTimeout(that.load_time_control)
        that.load_time_control = setTimeout(() => {
          that.moveDirection = 'top'
          that.props.chatActions.fetchMessageIfNeeded()
        }, 200)
      }
    })
  }

  componentDidUpdate () {
    console.info('ChatBox update')
    this.jroll.refresh()
    if (this.moveDirection === 'bottom') {
      this.jroll.scrollTo(0, this.jroll.maxScrollY, 300)
      this.moveDirection = ''
    }
    else if (this.moveDirection === 'top') {
      this.jroll.scrollTo(0, 0, 300)
      this.moveDirection = ''
    }
    else {
      // this.jroll.scrollTo(0, this.jroll.maxScrollY, 300)
    }
    // this.roundRedis()
    this.moveDirection = ''
  }

  componentWillUnmount () {
    this.jroll.destroy()
    clearTimeout(this.load_time_control)
    clearTimeout(this.round_time_control)
  }

  keyUp (e) {
    if (e.keyCode === 13) {
      this.sendMessage()
    }
  }

  sendMessage () {
    let name = this.props.account || 'testtest123'
    let content = this.input.innerHTML
    let time = moment().format('YYYY-MM-DD HH:mm:ss')
    if (name === '') {
      return alert('需要登录后才可发送消息')
    }
    if (trim(content) === '') {
      return alert('您未输入任何内容')
    }
    this.moveDirection = 'bottom'
    this.props.chatActions.send({
      name,
      content,
      time
    })
  }

  roundRedis () {
    this.round_time_control = setInterval(
        this.props.chatActions.fetchRedisIfNeeded, 3000
    )
  }

  /**彩条面板和emoji面板交换显示**/
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

  /**emoji面板**/
  addEmoji (e) {
    let htmlStr = this.input.innerHTML
    let url = e.target.src
    htmlStr += `<img src=${url} />`
    this.input.innerHTML = htmlStr
  }

  /**caitiao面板**/
  addCaitiao (e) {
    let htmlStr = this.input.innerHTML
    let url = e.target.src
    htmlStr += `<img src=${url} />`
    this.input.innerHTML = htmlStr
  }

  /**上传文件**/
  fileChange (e) {
    let file = e.target
    if (file.value === '') {
      return false
    }
    let img = file.files[0]
        , formData = new FormData()
    formData.append('upload_img', img)
    fetch(upload_img, {
      method: 'POST',
      credentials: 'include',
      body: formData
    })
        .then(res => res.json())
        .then(json => {
          if (json.status) {
            let content = this.input.innerHTML
            content += `<img src=${json.img} />`
            this.input.innerHTML = content
            file.value=''
          }
          else {
            alert('网络连接错误')
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络连接错误')
        })
  }

  /**聊天框点中清除**/
  chatBoxFoucs () {
    if (this.input.innerHTML === '请输入你想说的话') {
      this.chatBoxClear()
    }
  }

  /**聊天框点中清除**/
  chatBoxClear () {
    this.input.innerHTML = ''
  }
}

export default ChatBox
