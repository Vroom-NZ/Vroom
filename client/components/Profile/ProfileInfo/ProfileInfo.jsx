import React from 'react'
import { connect } from 'react-redux'

function profileInfo (props) {
  const { firstName, lastName, hasVehicle, profilePic, bio, rating } = props.user
  const { make, model, year, colour } = props.car
  const mockUser = {
    bio: 'This is my bio wow so sick, lets vroomvroombaby!',
    profilePic: 'images/Avatarprofpic.png',
    rating: '★ 5/5'
  }

  return (
    <>
      <div className="profile-box">
        <div className="personal-info">
          <img className='avatar'src={mockUser.profilePic}></img>
          <h1 className='text-margin'> {firstName} {lastName}  </h1>
          <h2>{mockUser.rating}</h2>
          <p className='bio-box'> {mockUser.bio}</p>
          {hasVehicle
            ? <div className="vehicle-box">
              <h3> Vehicle Details</h3>
              <p> {make} {model} </p>
              <p> {year} </p>
              <p>{colour}</p>
            </div>
            : null
          }
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

export default connect(mapStateToProps)(profileInfo)
