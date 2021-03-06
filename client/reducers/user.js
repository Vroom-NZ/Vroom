import { SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = {
  id: null,
  username: '',
  token: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  auth0Id: '',
  email: '',
  hasVehicle: false,
  carId: '',
  rating: '',
  bio: '',
  profilePic: ''
}

export default function user (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    case CLEAR_USER:
      return emptyUser

    default:
      return state
  }
}
