import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
// import History from './Rides/History'


import ProfileInfo from './ProfileInfo/ProfileInfo'
import { getRides } from '../../apis/rides'
import { getCar } from '../../apis/cars'

import RideCard from './Rides/RideCard'

function Profile (props) {
  const [rides, setRides] = useState([])
  const [car, setCar] = useState([])
  const { auth0Id } = props.user

  useEffect(async () => {
    const postedRides = await getRides()
    // const user = await getUsers(id)
    const filteredRides = postedRides.filter((ride) => ride.auth0Id === auth0Id)
    setRides(filteredRides)
  }, [])

  useEffect(async () => {
    const myCar = await getCar(auth0Id)
    setCar(myCar)
  }, [])

  return (
    <>
      <div>
        <h1> Kia Ora, { props.user.firstName}</h1>
      </div>
      <div >
        <ProfileInfo key={car.id} car={car}/>
      </div>

      <div>
        {rides.length && (
          <>
            <h1> Rides you have posted!</h1>

            <div>
              {rides.map((ride) => {
                return <RideCard key={ride.id} ride={ride}/>
              })}
            </div>
          </>
        )}
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
