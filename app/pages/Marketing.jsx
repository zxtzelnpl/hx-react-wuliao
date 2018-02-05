'use strict'

import './Marketing.less'

import React, {Component} from 'react'

import Head from '../components/Head'
import CaseReview from '../components/marketing/CaseReview'
import PromotionalMaterial from '../components/marketing/PromotionalMaterial'
import VideoProgram from '../components/marketing/VideoProgram'
import {connect} from "react-redux";

class Marketing extends Component {
  constructor (props){
    super(props)
    this.tabNames = [
      '案例回顾',
      '推广物料',
      '视频节目']
    this.state={
      selected:0
    }
  }

  tabChange (index) {
    this.setState({
      selected:index
    })
  }

  render () {
    let tabContents = [
      <CaseReview location={this.props.location}/>,
      <PromotionalMaterial location={this.props.location}/>,
      <VideoProgram location={this.props.location}/>
    ]
    return (
        <div className="container-marketing">
          <div className="blank-h-20" />
          <Head
              tabNames={this.tabNames}
              tabChange={this.tabChange.bind(this)}
              selected = {this.state.selected}
          />
          <div className="blank-h-20" />
          {tabContents[this.state.selected]}
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
export default connect(mapStateToProps,mapDispatchToProps)(Marketing)
