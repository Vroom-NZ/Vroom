import React, { useState, useEffect } from 'react'
import { getBookedRides } from '../apis/bookings'
import { getRides } from '../apis/rides'
import { connect } from 'react-redux'
import BookingCard from './Profile/Rides/BookingCard'

function BookedRides (props) {
  const { auth0Id } = props.user
  const [bookings, setBookings] = useState([])

  useEffect(async () => {
    const showBookings = await getBookedRides()
    const showRides = await getRides()
    const filteredBookings = showBookings.filter((booking) =>
      (booking.passengerId === auth0Id))
    setBookings(filteredBookings)
    if (showRides.id === bookings.id) {
      console.log('if statement in BookedRides.jsx returns: ', props.rides)
      const ridesMap = showRides.map((ride) => ride)
      console.log('ride: ', ridesMap)
      if (ridesMap.id === bookings.rideId) {
        console.log('ridesMap returns: ', ridesMap)
      }
      // all props.ride where ride.id === props.id
    }
  }, [])

  return (
    <>
      <div className='view-booked-rides-container'>
        {bookings.map(booking => {
          return (
            <BookingCard key={booking.id} booking={booking} />
          )
        })}

      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user,
    rides: state.rides
  }
}

export default connect(mapStateToProps)(BookedRides)
