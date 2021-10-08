import React from 'react'
import { deletePostedRide } from '../../../apis/rides'

export default function Ride (props) {
  const { date, arrivalTime, leavingTime, startLocation, destination, cost } = props.ride
  const rideInfo = props.ride

  function handleSubmit () {
    deletePostedRide(rideInfo)
    rideDeleteMessage()
    location.reload()
  }

  function rideDeleteMessage () {
    alert('Your posted ride has been deleted')
  }
  return (
    <>
      <div className="each-ride-container-profile">
        <div className='profile-ride-card-info'>
          <div className="time-loc-details">
            <span>
              From <span className='bold-ride-info'>{startLocation}</span><br></br>
              <span>At <span className='bold-ride-info'>{leavingTime}</span></span><br></br>
              To: <span> <span className='bold-ride-info'>{destination}</span></span><br></br>
              <span>ETA:  <span className='bold-ride-info'>{arrivalTime}</span></span>
            </span>
          </div>
          <div>
            <img className="pin-image" src='images/pin.jpg'/>
          </div>
          <div>
            <span className='bold-ride-info'>{props.user}</span><br></br>
            <span> Cost: <span className='bold-ride-info'>${cost}</span></span><br></br>
            <span className='bold-ride-info'>{date}</span><br></br>
          </div>
          <div>
            <img src='images/Avatarprofpic.png'/>
          </div>
        </div>
        <div>
          <button className='orange-register-button animate__infinite' onClick={handleSubmit}>Delete this ride</button>
        </div>
      </div>
    </>
  )
}
