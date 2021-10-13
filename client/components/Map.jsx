import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import user from '../reducers/user';

function Map () {
  const position = [-36.8666700, 174.7666700]

  return (
    <>

      <h2> Kia ora {user.firstName}, explore Aotearoa! </h2>
      <p> Click on the rides to see their details!</p>

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
      </>
  )}

  function mapStateToProps (state) {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps)(Map)
  