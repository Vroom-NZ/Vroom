import React, { useState, useEffect } from 'react'
import * as L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map () {
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  async function getISS () {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
    const data = await res.json() // convert to jsoin
    setLat(data.latitude)
    setLng(data.longitude)
  }

  useEffect(async () => {
    await getISS()
  }, [])

  const LeafIcon = L.Icon.extend({
    optios: {}
  })
  const greenIcon = new LeafIcon({
    iconUrl:
  'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF'
  })
  // const myIcon = new L.Icon({
  //   iconUrl: car,
  //   iconRetinaUrl: car,
  //   popupAnchor: [-0, -0],
  //   iconSize: [32, 45]

  // })

  return (
    <div>
      <MapContainer className='map' center={ [lat, lng] } zoom = {2} scrollWheelZoom ={false}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>

        </TileLayer>
        <Marker position={[lat, lng]} icon = {greenIcon}>
          <Popup>
        this will be where the specific ride comes up
          </Popup>

        </Marker>
      </MapContainer>

    </div>
  )
}
