import { combineReducers } from 'redux'

import user from './user/user.reducer'
import errorHandler from './errorHandler/errorHandler.reducer'
import modals from './modals/modals.reducer'

const rootReducer = combineReducers({
  errorHandler,
  modals,
  user,
})

export default rootReducer
