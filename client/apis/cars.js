import request from 'superagent'

const rootUrl = '/api/v1'

export function getCar () {
  return request.get(rootUrl + '/cars')
    .then(res => {
      return res.body.car
    })
}

export async function addCar (car, user) {
  const carWithUser = { carRego: car, auth: user }
  return await request.post(rootUrl + '/cars/')
    .send(carWithUser)
}
