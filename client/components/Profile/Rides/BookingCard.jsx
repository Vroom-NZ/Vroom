import React from 'react'

export default function BookingCard (props) {
  const { date, arrivalTime, leavingTime, startLocation, destination, seatsAvailable, cost } = props.ride
  return (
    <>
      <div className="each-ride-container">
        <div className='ride-card-profile-pic'>
          <img src='images/Avatarprofpic.png'/>
        </div>
        <div className='ride-card-info'>
          <p> Driving from <span className='bold-ride-info'>{startLocation}</span> to <span className='bold-ride-info'>{destination}</span> on <span className='bold-ride-info'>{date}</span>.</p>
          <p> You are leaving at <span className='bold-ride-info'>{leavingTime}</span> and arriving at <span className='bold-ride-info'>{arrivalTime}</span>. </p>
          <p> Cost: <span className='bold-ride-info'>${cost}</span> per person.</p>
          <p> There are <span className='bold-ride-info'>{seatsAvailable}</span> seats still free. </p>
          <p>The other passengers are: <span className='bold-ride-info'>Bob, Mary</span></p>
        </div>
      </div>
    </>
  )
}
