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

export function getRidesSearch (values) {
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

// export async function addRide (ride) {
//   return await request.post(rootUrl + '/viewrides/')
//     .send(ride)
// }
