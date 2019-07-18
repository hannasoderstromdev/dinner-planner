import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'

import Root from '../components/Root'

import '../fontAwesome'

const rootReducer = combineReducers({
  alerts: () => ({
    display: true,
    type: 'alert',
    message: 'message',
  }),
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const ThemeWrapper = ({ children }) => <Root store={store}>{children}</Root>

export default ThemeWrapper
