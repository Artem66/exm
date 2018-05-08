import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import Header from './containers/Header'
import Slider from './containers/Slider'



render(
  <div>
    <Header />
    <div className='row'>
    <div className='col-md-12'>
    <Slider />
  </div>
  <App />
  </div>
  </div>,
  document.getElementById('root')
)