import request from 'superagent'

const rootUrl = '/api/v1'

export function getUsers (id) {
  return request.get(rootUrl + '/users' + `${id}`)
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

export async function updateUser ({ user, id }) {
  console.log('api works: ', user, id)
  return await request.post(rootUrl + '/users/' + `${id}`)
    .send(user)
}
