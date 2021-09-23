import React from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Nav from './Nav'
import Registeration from './Registeration'
import { Route } from 'react-router'
import SearchBar from './SearchBar'
import LandingPage from './LandingPage'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Route exact path='/' component={Nav} />
      {/* <Route exact path='/' component={Users} />
      <Route exact path='/' component={PingRoutes} /> */}
      <Route path='/register' component={Registeration} />
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/' component={SearchBar} />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    token: globalState.user.token
  }
}

export default connect(mapStateToProps)(App)
