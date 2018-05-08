import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Header from './containers/Header'
import Tabs from './containers/Tabs'



render(
  <div>
    <Header />
    <Tabs />
    <App />
  </div>,
  document.getElementById('root')
)
