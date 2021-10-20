import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getRides } from '../apis/rides'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from 'leaflet'
import user from '../reducers/user'
import PopupRideCard from './Profile/Rides/PopupRideCard'

function Map () {
  const position = [-36.8666700, 174.7666700]
  const Tairua = [-37.0016, 175.8487]
  const Hamilton = [-37.7826, 175.2528]
  const [location, setLocation] = useState('Auckland')
  const [rides, setRides] = useState([])
  const [destinations, setDestinations] = useState([])

  useEffect(async () => {
    const allRides = await getRides()
    setRides(allRides)
  }, [])

  // promise.all will give us an array of lng and lat //
  function convertRides (destination) {
    console.log('rides are being converted: ', destination)
    if (destination === 'Tairua') {
      return Tairua
    } else if (destination === 'Hamilton') {
      return Hamilton
    } else { return position }
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
      setDestinations(filteredRides)
    } catch (error) {
      console.error(error)
      alert('This is not a valid location')
    }
  }

  const LeafIcon = L.Icon.extend({
    optios: {}
  })

  const greenIcon = new LeafIcon({
    iconUrl:
  'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7C2ecc71&chf=a,s,ee00FFFF'
  })

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
            <Popup className="popup-container">
              <div >
                {rides.length ? (
                  <>
                    {rides.map(ride => {
                      return (
                        <PopupRideCard key={ride.id} ride={ride} />
                      )
                    })}
                  </>
                ) : (
                  <div>
                    <p>Sorry, lol</p>
                  </div>
                )}

              </div>
            </Popup>
          </Marker>
          <div>
            {destinations.length && (
              <>
                {destinations.map(destination => {
                  return (
                    <Marker key={destination.id} icon={greenIcon} position={convertRides(destination.destination)}>
                      <Popup className="popup-container">
                        <PopupRideCard ride={destination} />
                      </Popup>
                    </Marker>

                  )
                })}
              </>
            )
            }
          </div>

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
