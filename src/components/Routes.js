import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'

import Alert from 'components/molecules/Alert'
import Modals from 'components/organisms/Modals'
import Navigation from 'components/organisms/Navigation'

import Home from './pages/Home'
import Error404 from './pages/Error404'

const Routes = () => (
  <ErrorBoundary>
    <div>
      <Navigation />

      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Error404} />
      </Switch>

      <Alert />
      <Modals />
    </div>
  </ErrorBoundary>
)

export default Routes
