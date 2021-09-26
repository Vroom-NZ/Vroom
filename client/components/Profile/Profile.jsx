import React from 'react'
import { connect } from 'react-redux'
// import { Link, Route } from 'react-router-dom'
// import History from './Rides/History'

import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile (props) {
  const { user } = props

  return (
    <>
      <div className="profile-container">
        <p> Kia Ora, { user.name} </p>
        <div >
          <ProfileInfo />
        </div>
      </div>
      {/* <div>
        <Link to='/profile/history'>Past Rides</Link>
      </div>
      <div>
        <Route path='profile/history' component={History} />
      </div> */}
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
