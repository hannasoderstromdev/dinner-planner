import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'

import Alert from 'components/molecules/Alert'
import Modals from 'components/organisms/Modals'

import Home from './pages/Home'
import GenerateDinners from './pages/GenerateDinners'
import WhatCanIMakeWith from './pages/WhatCanIMakeWith'
import Error404 from './pages/Error404'

const Routes = () => (
  <ErrorBoundary>
    <div>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={GenerateDinners} path="/generate-dinners" />
        <Route component={WhatCanIMakeWith} path="/what-can-i-make-with" />
        <Route component={Error404} />
      </Switch>

      <Alert />
      <Modals />
    </div>
  </ErrorBoundary>
)

export default Routes
