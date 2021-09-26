import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import error from './error'
import waiting from './waiting'
import vroomUser from './vroomUser'

export default combineReducers({
  users,
  user,
  error,
  waiting,
  vroomUser
})
