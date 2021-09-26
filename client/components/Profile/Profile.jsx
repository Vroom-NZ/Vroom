import React from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
// import History from './Rides/History'
import { fetchPostedRides } from '../../actions/rides'

import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile (props) {
  const { user } = props
  // const { auth0Id } = props.user

  function fetchedMyRides () {
    // props.dispatch(fetchPostedRides(auth0Id))
    console.log('props: ', props.dispatch(fetchPostedRides()))
  }

  fetchedMyRides()

  // useEffect(() => {
  //   console.log('user.auth0: ', user.auth0Id)

  // })

  return (
    <>
      <div className="profile-container">
        <p> Kia Ora, { user.name} </p>
        <div >
          <ProfileInfo />
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
