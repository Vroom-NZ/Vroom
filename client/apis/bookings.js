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

export async function cancelBookedRide (ride, user) {
  const rideInfo = { id: ride.id, passengerId: user.auth0Id }
  return await request.delete(rootUrl + '/bookings/')
    .send(rideInfo)
}
