import React from 'react'
import './LoadingPage.less'

class LoadingPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div className="LoadingPage">
          <div className="wave">
            <div className="wave1" />
            <div className="wave2" />
          </div>
          <h4>君银投顾物料平台</h4>
          <p>Loading...</p>
        </div>
    )
  }
}

export default LoadingPage