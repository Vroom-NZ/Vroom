import React from 'react'
import { connect } from 'react-redux'
import { bookRide } from '../../../apis/bookings'

function SearchRideCard ({ ride, user }) {
  console.log('search ride result: ', ride)
  const { date, arrivalTime, leavingTime, startLocation, destination, seatsAvailable, cost } = ride

  function handleSubmit () {
    // console.log('book ride sends this info: ', ride)
    bookRide(ride, user.auth0Id)
    rideBookedMessage()
    history.push('/')
  }

  function rideBookedMessage () {
    alert('Your ride has been booked! Redirecting you back to home page')
  }

  return (
    <>
      <div className="each-ride-container">
        <p> Driving from <span className='bold-ride-info'>{startLocation}</span> to <span className='bold-ride-info'>{destination}</span> on <span className='bold-ride-info'>{date}</span>.</p>
        <div className='ride-card-profile-pic'>
          <img src='images/Avatarprofpic.png'></img>
        </div>
        <div className='ride-card-info'>
          <p> <span className='bold-ride-info'>Sean</span> is leaving at <span className='bold-ride-info'>{leavingTime}</span> and arriving at <span className='bold-ride-info'>{arrivalTime}</span>. </p>
          <p> Cost: <span className='bold-ride-info'>${cost}</span> per person.</p>
          <p> There are <span className='bold-ride-info'>{seatsAvailable}</span> seats available. </p>
          <p>You will be joining: <span className='bold-ride-info'>Bob</span></p>
        </div>
        <div className="bookRideButton">
          <button className='orange-register-button animate__infinite' onClick={handleSubmit}>Book this ride</button>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    ride: state.ride,
    user: state.user

  }
}

export default connect(mapStateToProps)(SearchRideCard)
