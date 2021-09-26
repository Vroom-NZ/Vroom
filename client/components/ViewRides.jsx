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
      <div className='view-rides-container'>
        <div className='row'>
          <div className='column'>
            <div className='route-container'>
              {searchStore.startLocation} to {searchStore.destination}
            </div>
          </div>
          <div className='column'>
            <div className='route-date-container'>
              {searchStore.date}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column each-ride-container'>
            Ride 1
          </div>
          <div className='column each-ride-container'>
            Ride 2
          </div>
        </div>
        <div className='row'>
          <div className='column each-ride-container'>
            Ride 3
          </div>
          <div className='column each-ride-container'>
            Ride 4
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(ViewRides)
