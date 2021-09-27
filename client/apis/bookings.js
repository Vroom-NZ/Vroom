import request from 'superagent'

const rootUrl = '/api/v1'

export async function getBookedRides () {
  return await request.get(rootUrl + '/bookings/')
    .then(res => {
      return res.body
    })
}

export async function bookRide (rideDetails, passengerId) {
  const ridePassenger = { rideDetails, passengerId }
  return await request.post(rootUrl + '/bookings/')
    .send(ridePassenger)
}
