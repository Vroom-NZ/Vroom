import React from 'react'

export default function Ride (props) {
  const { date, arrivalTime, leavingTime, startLocation, destination, seatsAvailable, cost } = props.ride

  return (
    <>
      <div className="each-ride-container-profile">
        {/* <div className='ride-card-profile-pic'> */}
        {/* </div> */}
        <div className='profile-ride-card-info'>
          <div>
            <span>
              From <span className='bold-ride-info'>{startLocation}</span><br></br>
              <span>At <span className='bold-ride-info'>{leavingTime}</span></span><br></br>
              To: <span> <span className='bold-ride-info'>{destination}</span></span><br></br>
              <span>At <span className='bold-ride-info'>{arrivalTime}</span></span>
            </span>
          </div>
          <div>
            <img className="pin-image" src='images/component2.svg'/>
          </div>
          <div>
            <span className='bold-ride-info'>{props.user}</span><br></br>
            <span> Cost: <span className='bold-ride-info'>${cost}</span></span><br></br>
            <span className='bold-ride-info'>{date}</span><br></br>
          </div>
          <div>
            <img src='images/Avatarprofpic.png'/>
          </div>

          {/* <span> There are <span className='bold-ride-info'>{seatsAvailable}</span> seats still free. </span> */}
          {/* <span>Your passengers are: <span className='bold-ride-info'>Bob, Mary</span></span> */}
        </div>
      </div>
    </>
  )
}
