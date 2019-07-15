import React from 'react'
import { connect } from 'react-redux'

import errorHandlerActions from 'actions/errorHandler/errorHandler.actions'

import Expire from 'components/hoc/Expire'

import Icon from 'components/atoms/Icon'
import Button from 'components/atoms/Button'

const Alert = ({ status, error, type, message, clearError }) => {
  return error ? (
    <Expire callOnFinish={clearError}>
      <section type={type}>
        <div type={type}>
          {type === 'success' && (
            <Icon icon={['fas', 'check-circle']} iconsize="18px" />
          )}
          {type === 'danger' && (
            <Icon icon={['fas', 'exclamation-triangle']} iconsize="18px" />
          )}
          {type === 'alert' && (
            <Icon icon={['fas', 'exclamation-circle']} iconsize="18px" />
          )}
        </div>

        <div data-testid="message">
          {status}: {message}
        </div>

        <Button onClick={clearError}>
          <Icon
            color="rgba(0,0,0, .25)"
            icon={['fas', 'times']}
            iconsize="16px"
            type={type}
          />
        </Button>
      </section>
    </Expire>
  ) : null
}

Alert.defaultProps = {
  error: false,
  message: '',
  status: 0,
  type: 'alert',
}

const mapStateToProps = ({ errorHandler }) => ({
  ...errorHandler,
})

const mapDispatchToProps = {
  clearError: errorHandlerActions.clearError,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alert)
