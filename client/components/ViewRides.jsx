import React from 'react'
import { connect } from 'react-redux'
import store from './../store'
import { getRides } from '../apis/rides'

// import { searchRides } from '../apis/rides'

function ViewRides (search, rides) {
  const getStore = store.getState(search)
  const searchStore = getStore.search
  console.log('getRides in viewRides: ', getRides(rides))
  // console.log('store.getState: ', searchStore)
  // console.log('store.getState: ', searchStore.startLocation)
  // console.log('viewrides - props: ', startLocation)
  return (
    <>
      <div className="view-rides-main-container">
        <div className='start-end-date-container'>
          <div className='route-container'>
            {searchStore.startLocation} to {searchStore.destination} for {searchStore.seatsAvailable} passengers
          </div>
          <div className='route-date-container'>
            {searchStore.date}
          </div>
        </div>
        <div className="view-results-container">
          1 2 3 4
        </div>
      </div>
    </>
  )
}

export default connect()(ViewRides)
