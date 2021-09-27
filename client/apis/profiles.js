import request from 'superagent'
const rootUrl = '/api/v1'

export function getPostedRides () {
  return request.get(rootUrl + '/profile')
    .then(res => {
      return res.body.rides
    })
}
