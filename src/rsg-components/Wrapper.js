import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'

import Root from '../components/Root'

const rootReducer = combineReducers({
  alerts: () => ({
    display: true,
    type: 'alert',
    message: 'message',
  }),
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// Add all icons used here
library.add(
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faEllipsisH,
  faExclamationCircle,
  faExclamationTriangle,
  faSearch,
  faStar,
  faTimes,
)

const ThemeWrapper = ({ children }) => <Root store={store}>{children}</Root>

export default ThemeWrapper
