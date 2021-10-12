import React from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Route } from 'react-router'
import 'animate.css'

import SearchBar from './SearchBar'
import LandingPage from './LandingPage'
import Footer from './Footer'
import Registration from './Registration/Registration'
import Nav from './Nav'
import PostRide from './Drivers/PostRide'
import ViewRides from './ViewRides'
import Contact from './Contact'
import Profile from './Profile/Profile'
import Terms from './Terms'
import SiteInfo from './SiteInfo'
import CarReg from './Drivers/CarReg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const position = [51.505, -0.09]

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/' component={SearchBar} />
      <Route exact path='/' component={SiteInfo} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/rides' component={ViewRides} />
      <Route exact path='/cars' component={CarReg} />
      <Route exact path='/register' component={Registration} />
      <Route exact path='/drivers' component={PostRide} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/terms' component={Terms} />
      <Route path='/' component={Footer} />
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    token: globalState.user.token
  }
}

export default connect(mapStateToProps)(App)
