import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getRides } from '../apis/rides'
import RideCard from './Profile/Rides/RideCard'

function ViewRides (props) {
  const { startLocation, destination, date, seatsAvailable } = props.search

  console.log('getRides in viewRides: ', props.search)

  const [rides, setRides] = useState([])

  useEffect(async () => {
    const postedRides = await getRides()
    const filteredRides = postedRides.filter((ride) =>
      (ride.startLocation === startLocation && ride.destination === destination && ride.date === date && ride.seatsAvailable >= seatsAvailable))
    setRides(filteredRides)
  }, [])

  return (
    <>
      <div className="view-rides-main-container">
        <div className='start-end-date-container'>
          <div className='route-container'>
            {startLocation} to {destination} for {seatsAvailable} passengers
          </div>
          <div className='route-date-container'>
            {date}
          </div>
        </div>
        <div className="view-results-container">
          {rides.length && (
            <div>
              {rides.map((ride) => {
                console.log(ride)
                return <RideCard key={ride.id} ride={ride} />
              })}
            </div>
          )}
          <div className="bookRideButton">
            <button className='orange-register-button animate__infinite' data-testid='submitButton'>Book this ride</button>
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(ViewRides)
