import { getUsers } from '../apis/users'

export const SET_VROOM_USER = 'SET_VROOM_USER'
export const SET_VROOM_USERS = 'SET_VROOM_USERS'
export const CLEAR_VROOM_USER = 'CLEAR_VROOM_USER'
export const CLEAR_VROOM_USERS = 'CLEAR_VROOM_USERS'

export function setVroomUser (user) {
  return {
    type: SET_VROOM_USER,
    user
  }
}

export function setVroomUsers (users) {
  return {
    type: SET_VROOM_USERS,
    users
  }
}

export function clearVroomUser () {
  return {
    type: CLEAR_VROOM_USER
  }
}

export function clearVroomUsers () {
  return {
    type: CLEAR_VROOM_USERS
  }
}

export function fetchVroomUsers () {
  return dispatch => {
    return getUsers()
      .then(users => {
        dispatch(setVroomUsers(users))
        return null
      })
  }
}
