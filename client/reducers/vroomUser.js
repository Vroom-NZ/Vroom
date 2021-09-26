import { SET_VROOM_USER } from '../actions/vroomUser'

const emptyVroomUser = {
  firstName: '',
  lastName: '',
  phoneNumber: ''
}

function vroomUser (state = emptyVroomUser, action) {
  switch (action.type) {
    case SET_VROOM_USER:
      return action.vroomUser
    default:
      return state
  }
}

export default vroomUser
