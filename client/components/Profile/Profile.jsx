import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
// import History from './Rides/History'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import { getRides } from '../../apis/rides'
import RideCard from './Rides/RideCard'

function Profile (props) {
  const [rides, setRides] = useState([])
  const { auth0Id } = props.user

  useEffect(async () => {
    const postedRides = await getRides()
    // const user = await getUsers(id)
    const filteredRides = postedRides.filter((ride) => ride.auth0Id === auth0Id)
    setRides(filteredRides)
  }, [])

  return (
    <>
      <div className="profile-container">
        <p> Kia Ora, { props.user.name} </p>
        {rides.length && (
          <div>
            {rides.map((ride) => {
              return <RideCard key={ride.id} ride={ride}/>
            })}
          </div>
        )}
      </div>
      <div>
        <ProfileInfo />
        <ul>
          <li>

          </li>
        </ul>
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
