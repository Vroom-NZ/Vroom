// import React from 'react'
// import { connect } from 'react-redux'
// import store from './../store'
// import { getRides } from '../apis/rides'

// // import { searchRides } from '../apis/rides'

// function ViewRides (search, rides) {
//   const getStore = store.getState(search)
//   const searchStore = getStore.search
//   console.log('getRides in viewRides: ', getRides(rides))
//   // console.log('store.getState: ', searchStore)
//   // console.log('store.getState: ', searchStore.startLocation)
//   // console.log('viewrides - props: ', startLocation)
//   return (
//     <>
//       <div className="view-rides-main-container">
//         <div className='start-end-date-container'>
//           <div className='route-container'>
//             {searchStore.startLocation} to {searchStore.destination} for {searchStore.seatsAvailable} passengers
//           </div>
//           <div className='route-date-container'>
//             {searchStore.date}
//           </div>
//         </div>
//         <div className="view-results-container">
//           1 2 3 4
//         </div>
//       </div>
//     </>
//   )
// }

// export default connect()(ViewRides)

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
    // const filteredRides = postedRides.filter((ride) => ride.startLocation === startLocation)
    setRides(postedRides)
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
