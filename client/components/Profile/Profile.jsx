import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
// import History from './Rides/History'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import BookingCard from './Rides/BookingCard'
import { getBookedRides } from './../../apis/bookings'
import { getRides } from '../../apis/rides'
import { getCar } from '../../apis/cars'

import RideCard from './Rides/RideCard'

function Profile (props) {
  const [rides, setRides] = useState([])
  const [car, setCar] = useState({})
  const [view, setView] = useState('passenger')
  const [bookings, setBookings] = useState([])

  const { auth0Id, firstName } = props.user

  useEffect(async () => {
    try {
      const postedRides = await getRides()
      setRides(postedRides)
      const showBookings = await getBookedRides()
      setBookings(showBookings)
    } catch (error) {
      console.error(error)
    }
  }, [auth0Id])

  useEffect(async () => {
    try {
      if (auth0Id) {
        const myCar = await getCar(auth0Id)
        setCar(myCar)
      }
    } catch (error) {
      console.error(error)
    }
  }, [auth0Id])

  function handleClick (nav) {
    setView(nav)
  }
  // gets rides that have been posted
  const postedRides = rides.filter((ride) => ride.auth0Id === auth0Id)
  // get ride id from booked rides
  const bookedRides = bookings.filter((booking) => booking.passengerId === auth0Id)
  // uses ride.id to get all booked rides
  const myRides = rides.filter((ride) => { return bookedRides.some((booking) => booking.rideId === ride.id) })

  return (
    <div className='main-profile-container'>
      <div className="profile-box">
        {props.user.hasVehicle ? <ProfileInfo key={car.id} car={car}/>
          : <ProfileInfo />}
      </div>
      <div className='profile-ride-display'>
        <div className="profile-nav">
          <button className="profile-buttons" onClick={() => handleClick('driving')}> My booked rides</button>
          <button className="profile-buttons"onClick={() => handleClick('passenger') }>My posted rides</button>
        </div>
        { view === 'driving'
        // Posted rides below
          ? (postedRides.length
            ? <div className="profile-cards-container">
              {postedRides.map((ride, user) => {
                return <RideCard key={ride.id} ride={ride} user={firstName}/>
              })}
            </div>
            : <div className="profile-cards-container">
              <h2>Sorry {firstName} you have not posted any rides yet</h2>
            </div>
          )
          // Booked rides below
          : (myRides.length
            ? <div className='view-booked-rides-container'>
              {myRides.map(ride => {
                return (
                  <BookingCard key={ride.id} ride={ride} />
                )
              })}
            </div>
            : <div className="view-booked-rides-container">
              <h2>Sorry {firstName} you have not booked any rides yet</h2>
            </div>
          )
        }
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
