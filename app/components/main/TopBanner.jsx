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
            <div className="item">PANE 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur, doloribus ex itaque iusto pariatur provident quas quidem quis ratione repudiandae similique suscipit veniam? Consequuntur necessitatibus nemo praesentium quis sunt?</div>
            <div className="item">PANE 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores, at dolorum, fugiat fugit ipsam itaque magni minus non obcaecati odit officia sequi sunt tempora tempore unde vitae voluptatem?</div>
            <div className="item">PANE 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi aperiam at aut debitis distinctio, eaque, illo illum impedit libero provident qui suscipit vero voluptas? Dolores odio quisquam vero.</div>
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
