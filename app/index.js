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
import LoadingPage from './subpages/LoadingPage'
import ErrorPage from './subpages/ErrorPage'

if (typeof __DEV__ !== 'undefined' && __DEV__) {
  console.info('"__DEV__=' + __DEV__ + '",这里是测试环境')
  myStorage.clear('user')
}


let store = configureStore()
render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    , document.getElementById('root'))