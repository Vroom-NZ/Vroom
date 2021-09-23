const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const request = require('superagent')

const domain = 'https://dev-6s8lzyu9.us.auth0.com'
const clientId = '9GJ0SaUS2L8Nhu3dRHvUj7yHXjUQusmz'
const secret = process.env.AUTH0_API_EXPLORER_SECRET

const getUserRoles = async (uid) => {
  console.log('domain:', domain)
  console.log('client id:', clientId)
  console.log('secret:', secret)
  const accessToken = await getAccessToken()
  const { body } = await request(`${domain}/api/v2/users/${uid}/roles`)
    .set({ authorization: `Bearer ${accessToken}` })

  return body[0].name
}

const getAccessToken = async () => {
  const data = {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: secret,
    audience: `${domain}/api/v2/`
  }

  const { body } = await request.post(`${domain}/oauth/token`)
    .send(data)
    .type('form')
  return body.access_token
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-6s8lzyu9.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://vroom/api',
  issuer: 'https://dev-6s8lzyu9.us.auth0.com/',
  algorithms: ['RS256']
})

module.exports = { checkJwt, getUserRoles }
