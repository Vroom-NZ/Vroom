import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import rides from './rides'
import combinedUser from './combinedUser'
import search from './search'

export default combineReducers({
  users,
  user,
  rides,
  combinedUser,
  search

})
