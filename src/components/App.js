import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from 'helpers/store'

import Root from './Root'
import Routes from './Routes'

import './Normalize.css'

const App = () => (
  <Root store={store}>
    <Router>
      <Routes />
    </Router>
  </Root>
)

export default App
