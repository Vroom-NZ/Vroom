const initialUser = {
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

function reduceUsers (state = initialUser, action) {
  switch (action.type) {
    case 'REGISTER':
      return action.combinedUser
    default:
      return state
  }
}

export default reduceUsers
