'use strict'

import icon_tx from '../../static/img/icon_tx.png'

import './MessageItem.less'

import React from 'react'

const MessageItem = ({name, time, content}) => {
  return (
      <div className="messageItem">
        <div className="head">
          <img src={icon_tx}/>
          <span className="name">{name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: content}}/>
      </div>
  )
}

export default MessageItem
