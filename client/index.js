import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import store from './store'
import App from './components/App'
import { Auth0Provider } from '@auth0/auth0-react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain='dev-6s8lzyu9.us.auth0.com'
      clientId='DQ9jrSrXGYBRPuiayM4LzGnZF6bir3IN'
      redirectUri={window.location.origin}
      audience='https://vroom/api'
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
