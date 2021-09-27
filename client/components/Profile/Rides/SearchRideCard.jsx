import React from 'react'
// import { connect } from 'react-redux'

export default function SearchRideCard ({ ride }) {
  console.log('search ride result: ', ride)
  const { date, arrivalTime, leavingTime, startLocation, destination, seatsAvailable, cost } = ride

  function handleSubmit () {
    console.log('book ride sends this info: ', ride)
  }
  return (
    <>
      <div className="each-ride-container">
        {/* <p> Driving from <span className='bold-ride-info'>{startLocation}</span> to <span className='bold-ride-info'>{destination}</span> on <span className='bold-ride-info'>{date}</span>.</p> */}
        <p> Leaving at <span className='bold-ride-info'>{leavingTime}</span> and planning on arriving at <span className='bold-ride-info'>{arrivalTime}</span>. </p>
        <p> Cost: <span className='bold-ride-info'>${cost}</span></p>
        <p> There are <span className='bold-ride-info'>{seatsAvailable}</span> seats available. </p>
        <p>You will be joining: <span className='bold-ride-info'>Bob</span></p>
        <div className="bookRideButton">
          <button className='orange-register-button animate__infinite' onClick={handleSubmit}>Book this ride</button>
        </div>
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
