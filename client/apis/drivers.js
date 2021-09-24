import request from 'superagent'

const rootUrl = '/api/v1'

export async function addRide (ride) {
  return await request.post(rootUrl + '/users/')
    .send(ride)
}
