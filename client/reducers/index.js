import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import rides from './rides'

export default combineReducers({
  users,
  user,
  rides
})
