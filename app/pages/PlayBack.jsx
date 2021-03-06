'use strict'

import './PlayBack.less'

import React, {Component} from 'react'
import {connect} from "react-redux";
import Head from '../components/playback/Head'
import PlayBackContent from '../components/playback/PlayBackContent'

class PlayBack extends Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
        <div className="container-play-back">
          <div className="blank-h-20" />
          <Head />
          <div className="blank-h-20" />
          <PlayBackContent location={this.props.location} />
        </div>
    )
  }
}

/**绑定Redux**/
function mapStateToProps(state) {
  return {
    location:state.user.location
  }
}
function mapDispatchToProps() {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PlayBack)
