import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <Root />,
  document.getElementById('root')
)
