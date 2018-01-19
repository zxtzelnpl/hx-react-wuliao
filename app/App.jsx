'use strict'

import './App.less'

import React from 'react'
import {Route, Redirect, Link} from 'react-router-dom'
import LoginBox from './components/LoginBox'
import Test from './subpages/Test'
import Main from './subpages/Main'
import Header from './components/Header'

const App = () => {
  return (
      <div className="container">
        <Header />
        <Route exact path="/" render={() => (<Redirect to="/main"/>)}/>
        <Route path="/main" component={Main}/>
        <Route path="/test" component={Test}/>
        <LoginBox />
      </div>
  )
}

export default App