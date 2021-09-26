import React from 'react'

export default function Ride ({ ride }) {
  console.log(ride)
  const { date, arrivalTime, leavingTime, startLocation, destination, seatsAvailable, cost } = ride

  // mockData

  return (
    <>
      <div className="profile-container">
        <p> {startLocation}- {destination} </p>
        <p>{date} {leavingTime}-{arrivalTime} </p>
        <p> {cost}</p>
        <p>{seatsAvailable}</p>
      </div>
    </>
  )
}
