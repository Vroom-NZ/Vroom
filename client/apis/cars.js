import request from 'superagent'

const rootUrl = '/api/v1'

export function getCar (id) {
  return request.get(rootUrl + `/cars/${id}`)
    .then(res => {
      return res.body
    })
}

export async function addCar (car, user) {
  const carWithUser = { carRego: car, auth0Id: user.auth0Id }
  return await request.post(rootUrl + '/cars/')
    .send(carWithUser)
}
