import request from 'superagent'

const rootUrl = '/api/v1'

// Kieran and JV are unsure whether the getRides and addRides functions below are needed
// now that they exist for in the rides.js file...

// export function getRides () {
//   return request.get(rootUrl + '/drivers')
//     .then(res => {
//       console.log(res.body)
//       return res.body.rides
//     })
// }

// export async function addRides (ride) {
//   return await request.post(rootUrl + '/drivers/')
//     .send(ride)
// }
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
