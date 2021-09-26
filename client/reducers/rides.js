const initial = {
  startLocation: '',
  destination: '',
  date: '',
  leavingTime: '',
  arrivalTime: '',
  seatsAvailable: '',
  cost: ''
}

function reduce (state = initial, action) {
  switch (action.type) {
    case 'SUBMIT':
      return action.ride
    default:
      return state
  }
}

export default reduce
