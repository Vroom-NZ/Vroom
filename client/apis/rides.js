import request from 'superagent'

const rootUrl = '/api/v1'

export async function getRides () {
  return await request.get(rootUrl + '/rides/')
    .then(res => {
      return res.body
    })
}

export async function addRides (ride, user) {
  const rideUser = { newRide: ride, auth: user }
  return await request.post(rootUrl + '/rides/')
    .send(rideUser)
}

export function searchRides (values) {
  const {
    startLocation,
    destination,
    date,
    seatsAvailable
  } = values

  const queryStringParams = `?startLocation=${startLocation}&destination=${destination}&date=${date}&seatsAvailable=${seatsAvailable}`
  return request.get(rootUrl + '/rides/' + queryStringParams)
    .then(res => {
      return res.body.rides
    })
}

export async function deletePostedRide (ride) {
  // const id = ride.id
  // const auth0Id = ride.auth0Id
  const rideInfo = { id: ride.id, auth0Id: ride.auth0Id }
  return await request.delete(rootUrl + '/rides/')
    .send(rideInfo)
}
