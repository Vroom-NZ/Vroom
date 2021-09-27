import React from 'react'
// import { connect } from 'react-redux'

export default function SearchRideCard ({ ride }) {
  console.log('search ride result: ', ride)
  const { date, arrivalTime, leavingTime, startLocation, destination, seatsAvailable, cost, passengers } = ride

  function handleSubmit () {
    console.log('book ride sends this info: ', ride)
  }
  return (
    <>
      <div className="each-ride-container">
        <p> {startLocation}- {destination} </p>
        <p>{date} {leavingTime}-{arrivalTime} </p>
        <p> {cost}</p>
        <p>{seatsAvailable}</p>
        <p>You will be joining: </p>
      </div>
      <div className="bookRideButton">
        <button className='orange-register-button animate__infinite' onClick={handleSubmit}>Book this ride</button>
      </div>
    </>
  )
}

// function mapStateToProps (state) {
//   return {
//     ride: state.ride,
//     user: state.user,
//     search: state.search
//   }
// }

// export default connect(mapStateToProps)(SearchRideCard)
