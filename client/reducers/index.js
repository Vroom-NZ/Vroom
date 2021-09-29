import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import rides from './rides'
import search from './search'

export default combineReducers({
  users,
  user,
  rides,
  search

})
