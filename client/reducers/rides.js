import { SET_RIDES } from '../actions/rides'

const initial = {
  startLocation: '',
  destination: '',
  date: '',
  leavingTime: '',
  arrivalTime: '',
  seatsAvailable: '',
  cost: '',
  driverId: ''
}

export function postedRides (state = [], action) {
  switch (action.type) {
    case SET_RIDES:
      return action.rides
    default:
      return state
  }
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
