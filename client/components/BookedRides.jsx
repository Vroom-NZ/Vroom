import React, { useState, useEffect } from 'react'
import { getBookedRides } from '../apis/bookings'
import { getRides } from '../apis/rides'
import { connect } from 'react-redux'
import BookingCard from './Profile/Rides/BookingCard'

function BookedRides (props) {
  const { auth0Id } = props.user
  const [bookings, setBookings] = useState([])
  const [rides, setRides] = useState([])

  useEffect(async () => {
    const showBookings = await getBookedRides()
    setBookings(showBookings)
    const showRides = await getRides()
    setRides(showRides)
  }, [])

  const filteredBookings = bookings.filter((booking) => booking.passengerId === auth0Id)
  const myRides = rides.filter((ride) => { return filteredBookings.some((booking) => booking.rideId === ride.id) })

  return (
    <>
      <div className='view-booked-rides-container'>
        {myRides.map(ride => {
          return (
            <BookingCard key={ride.id} ride={ride} />
          )
        })}
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(BookedRides)
