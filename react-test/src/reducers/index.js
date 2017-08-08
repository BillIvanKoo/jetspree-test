import { combineReducers } from 'redux'

import users from './userReducer'
import activeUser from './activeUserReducer'

export default combineReducers({
  users,
  activeUser
})