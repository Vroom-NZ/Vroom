import React from 'react'

export default function BookingCard (props) {
  const { date, arrivalTime, leavingTime, startLocation, destination, cost } = props.ride
  return (
    <>
      <div className="each-ride-container-profile">
        {/* <div className='ride-card-profile-pic'>
          <img src='images/Avatarprofpic.png'/>
        </div> */}
        <div className='profile-ride-card-info-passenger'>
          <span className="time-loc-details">Leaving from <span className='bold-ride-info'>{startLocation} </span>
           at <span className='bold-ride-info'>{leavingTime}</span><br></br>
          To <span className='bold-ride-info'>{destination} </span>
          and arriving at <span className='bold-ride-info'>{arrivalTime}</span></span>

          <img className="pin-image" src='images/pin.jpg'/>
          <span className='bold-ride-info'>
            Date: <br></br>
            {date} <br></br><br></br>
            Cost: <span className='bold-ride-info'><br></br>
              ${cost} pp</span>
          </span>
        </div>
      </div>
    </>
  )
}
