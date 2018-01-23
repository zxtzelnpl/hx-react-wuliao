'use strict'

import './App.less'

import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PopLogin from './containers/PopLogin'
import PopBack from './containers/PopBack'
import Test from './subpages/Test'
import Main from './subpages/Main'
import ReSearch from './subpages/ReSearch'
import Strategy from './subpages/Strategy'
import Marketing from './subpages/Marketing'
import Experience from './subpages/Experience'
import CustomerService from './subpages/CustomerService'
import Header from './containers/Header'

const App = () => {
  return (
      <div className="container">
        <Header />
        <Route exact path="/" render={() => (<Redirect to="/customerservice"/>)}/>
        <Route path="/main" component={Main}/>
        <Route path="/research" component={ReSearch}/>
        <Route path="/strategy" component={Strategy}/>
        <Route path="/marketing" component={Marketing}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/customerservice" component={CustomerService}/>
        <Route path="/test" component={Test}/>
        <PopLogin />
        <PopBack />
      </div>
  )
}

export default App