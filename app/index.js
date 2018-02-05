'use strict'

import 'es6-promise'
import 'whatwg-fetch'
import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import myStorage from './static/myStorage'
import App from './App'
import LoadingPage from './pages/LoadingPage'
import ErrorPage from './pages/ErrorPage'

const root = document.getElementById('root')

if (typeof __DEV__ !== 'undefined' && __DEV__) {
  console.info('"__DEV__=' + __DEV__ + '",这里是测试环境')
  myStorage.clear('user')
}

try{
  let store = configureStore()
  render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
      ,root)
}
catch(err){
  render(<ErrorPage err={err}/>,root)
}
