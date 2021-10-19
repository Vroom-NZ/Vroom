import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getRides } from '../apis/rides'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import user from '../reducers/user'

function Map () {
  const position = [-36.8666700, 174.7666700]
  const [location, setLocation] = useState('Auckland')
  const [rides, setRides] = useState([])

  useEffect(async () => {
    const allRides = await getRides()
    setRides(allRides)
  }, [])

  // promise.all will give us an array of lng and lat //
  function convertRides (destinations) {
    console.log('convertRides: ', destinations)
  }

  function handleChange (event) {
    console.log('change is being handled')
    setLocation(event.target.value)
  }

  async function handleSubmit () {
    try {
      console.log('button is being clicked')
      const filteredRides = rides.filter((ride) =>
        (ride.startLocation === location))
      convertRides(filteredRides)
    } catch (error) {
      console.error(error)
      alert('This is not a valid location')
    }
  }

  return (
    <>

      <h2> Kia ora {user.firstName}, explore Aotearoa! </h2>
      <p> Click on the rides to see their details!</p>
      <>
        <form onSubmit={(() => handleSubmit())}>
          <input
            type="text"
            onChange={handleChange}
          />
          <button type="submit">Explore</button>
        </form>
      </>
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              this will be the ride card. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Map)
