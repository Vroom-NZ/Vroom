import { getPostedRides } from '../apis/profiles'

export const SET_RIDES = 'SET_RIDES'

export function setRides (rides) {
  return {
    type: SET_RIDES,
    rides
  }
}

export function fetchPostedRides () {
  return dispatch => {
    return getPostedRides()
      .then(users => {
        dispatch(setRides(users))
        return null
      })
  }
}
