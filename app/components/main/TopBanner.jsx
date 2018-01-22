'use strict'

import './TopBanner.less'

import prev from '../../static/img/icon_home_benner_left.png'
import next from '../../static/img/icon_home_benner_right.png'

import React, {PureComponent} from 'react'
import ReactSwipe from 'react-swipe'

class TopBanner extends PureComponent {
  constructor (props){
    super(props)
  }

  prev(){
    this.swipe.prev()
  }

  next(){
    this.swipe.next()
  }

  render () {
    return (
        <div className="top-banner">
          <ReactSwipe className="carousel"
                      swipeOptions={{
                        speed: 400,
                        auto: 1000,
                        continuous: true
                      }}
                      ref={swipe=>{this.swipe = swipe}}
          >
            <div className="item">PANE 1</div>
            <div className="item">PANE 2</div>
            <div className="item">PANE 3</div>
          </ReactSwipe>
          <div className="prev" onClick={this.prev.bind(this)}>
            <img src={prev} alt=""/>
          </div>
          <div className="next" onClick={this.next.bind(this)}>
            <img src={next} alt=""/>
          </div>
        </div>
    )
  }
}

export default TopBanner
