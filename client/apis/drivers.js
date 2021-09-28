import request from 'superagent'

const rootUrl = '/api/v1'

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
