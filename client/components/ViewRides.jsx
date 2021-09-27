import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getRides } from '../apis/rides'
import SearchRideCard from './Profile/Rides/SearchRideCard'

function ViewRides (props) {
  const { startLocation, destination, date, seatsAvailable } = props.search

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
          {rides.length ? (
            <>
              {rides.map((ride) => {
                console.log(ride.id)
                return (
                  <SearchRideCard key={ride.id} ride={ride} />
                )
              })}

            </>
          ) : (
            <div>
              <p>Sorry there is no ride available from {startLocation} to {destination} on {date}</p>
              <div className="bookRideButton">
                <Link to='/' className='no-ride animate__infinite'>Search for another ride</Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    search: state.search,
    ride: state.ride
  }
}

export default connect(mapStateToProps)(ViewRides)
