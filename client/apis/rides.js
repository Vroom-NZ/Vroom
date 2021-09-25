import request from 'superagent'

const rootUrl = '/api/v1'

export function getRides (values) {
  const {
    startLocation,
    destination,
    date,
    seatsAvailable
  } = values

  const queryStringParams = `?startLocation=${startLocation}&destination=${destination}&date=${date}&seatsAvailable=${seatsAvailable}`
  return request.get(rootUrl + '/drivers/' + queryStringParams)
    .then(res => {
      return res.body.rides
    })
}

// export async function addRide (ride) {
//   return await request.post(rootUrl + '/viewrides/')
//     .send(ride)
// }
