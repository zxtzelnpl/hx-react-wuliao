'use strict'

import './Video.less'

import React, {Component} from 'react'

class Video extends Component {
  constructor (props) {
    super(props)
    this.state = {
      myHtml: `<img width=100% height=100% src="http://zhibo.hbtvtswc.cn/images/YRight/Y_Right_Syllabus7000.gif?v=0" alt=""/>`
    }
  }


  componentDidMount () {
    // this.setState({
    //   myHtml: `<gs:video-live id="videoComponent"
    //                      site="jyzqsh.gensee.com"
    //                      ctx="webcast"
    //                      ownerid="d707283a486e46b3aec1b17e852a4cc0"
    //                      uname=""
    //                      authcode=""
    //                      bgimg="http://zhibo.hbtvtswc.cn/images/YRight/Y_Right_Syllabus7000.gif?v=0"
    //       />`
    // })
  }

  render () {
    return (
        <div className="video-box">
          <div className="notice">
            <div className="notice-wrap">
              <p className="text">
                免责声明Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi atque consequatur cumque eaque est explicabo itaque laborum magnam maiores modi molestiae, mollitia nam nobis nostrum odio quibusdam suscipit voluptatibus.
              </p>
            </div>
          </div>
          <div
              className="gensee-video"
              dangerouslySetInnerHTML={{__html: this.state.myHtml}}
          />
        </div>
    )
  }
}

export default Video
