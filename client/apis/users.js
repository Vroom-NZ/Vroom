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

export async function updateUser (bio, id) {
  console.log('api: ', bio, id)
  const userBio = { bio, id }
  return await request.post(rootUrl + '/users/' + `${id}`)
    .send(userBio)
}
