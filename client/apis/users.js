import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers () {
  return request.get(rootUrl + '/users')
    .then(res => {
      return res.body.users
    })
}

export function getUser (id) {
  return request.get(rootUrl + '/users/' + `${id}`)
    .then(res => {
      return res.body.user
    })
}

export async function addUser (user) {
  return await request.post(rootUrl + '/users/')
    .send(user)
}
