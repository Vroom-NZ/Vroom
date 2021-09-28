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
  const { auth0Id, firstName } = props.user

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
    <div className='main-profile-container'>
      <div className="profile-box">
        {props.user.hasVehicle ? <ProfileInfo key={car.id} car={car}/>
          : <ProfileInfo />}
      </div>

      <div className='profile-ride-display'>

        <div className="profile-nav">
          <div className="profile-buttons">IM DRIVING</div>
          <div className="profile-buttons">IM A PASSANGER</div>
        </div>

        {rides.length ? (
          <div className="profile-cards-container">
            {rides.map((ride, user) => {
              return <RideCard key={ride.id} ride={ride} user={firstName}/>
            })}
          </div>
        ) : (
          <div className="profile-cards-container">
            <h2>Sorry {firstName} you have not posted any rides yet</h2>
          </div>
        )}

      </div>

    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
