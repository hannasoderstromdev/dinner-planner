import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ErrorBoundary from 'components/hoc/ErrorBoundary'
import PrivateRoute from 'components/hoc/PrivateRoute'

import Alert from 'components/molecules/Alert'
import Modals from 'components/organisms/Modals'
import Navigation from 'components/organisms/Navigation'

import Home from './pages/Home'
import Private from './pages/Private'
import Settings from './pages/Settings'
import Error404 from './pages/Error404'

const Routes = () => (
  <ErrorBoundary>
    <div>
      <Navigation />

      <Switch>
        <PrivateRoute component={Private} exact path="/private" />
        <PrivateRoute component={Settings} exact path="/settings" />
        <Route component={Home} exact path="/" />
        <Route component={Error404} />
      </Switch>

      <Alert />
      <Modals />
    </div>
  </ErrorBoundary>
)

export default Routes
