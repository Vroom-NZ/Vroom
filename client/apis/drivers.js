import request from 'superagent'

const rootUrl = '/api/v1'

export function getRides () {
  return request.get(rootUrl + '/drivers/')
    .then(res => {
      return res.body.rides
    })
}

export async function addRides (ride, user) {
  const rideUser = { newRide: ride, auth: user }
  return await request.post(rootUrl + '/drivers/')
    .send(rideUser)
}

export function getCar () {
  return request.get(rootUrl + '/drivers')
    .then(res => {
      return res.body.car
    })
}

export async function addCar (car) {
  return await request.post(rootUrl + '/drivers/')
    .send(car)
}
