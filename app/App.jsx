'use strict'

import './App.less'

import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PopLogin from './containers/PopLogin'
import PopBack from './containers/PopBack'
import Test from './pages/Test'
import Main from './pages/Main'
import LiveVideo from './pages/LiveVideo'
import ReSearch from './pages/ReSearch'
import Strategy from './pages/Strategy'
import Marketing from './pages/Marketing'
import Experience from './pages/Experience'
import CustomerService from './pages/CustomerService'
import PlayBack from './pages/PlayBack'
import Header from './containers/Header'

const App = () => {
  return (
      <div className="container">
        <Header />
        {/*<Route exact path="/" render={() => (<Redirect to="/main"/>)}/>*/}
        <Route path="/" exact component={Main}/>
        <Route path="/livevideo" component={LiveVideo}/>
        <Route path="/research" component={ReSearch}/>
        <Route path="/strategy" component={Strategy}/>
        <Route path="/marketing" component={Marketing}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/customerservice" component={CustomerService}/>
        <Route path="/playback" component={PlayBack}/>
        <Route path="/test" component={Test}/>
        <PopLogin />
        <PopBack />
      </div>
  )
}

export default App