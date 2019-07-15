import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import userActions from 'actions/user/user.actions'

const PrivateRoute = ({
  component: Component,
  errorHandler,
  logoutUser,
  ...rest
}) => {
  // Only checking for existing localStorage item doesn't cover when item exist but token is invalid. Hence, checking for 403 errors is needed.
  if (errorHandler.status === 403) {
    logoutUser()
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )}
      />
    )
  }

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user') ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

const mapStateToProps = ({ errorHandler }) => ({
  errorHandler,
})

const mapDispatchToProps = {
  logoutUser: userActions.logoutUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute)
