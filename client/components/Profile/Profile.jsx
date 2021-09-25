import React from 'react'
import { connect } from 'react-redux'

function Profile (props) {
  const { user } = props

  return (
    <div className="profile-container">
      <p> Hello, { user.name} </p>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
