import React from 'react'
import { connect } from 'react-redux'

function profileInfo (props) {
  const { firstName, lastName, hasVehicle, profilePic, bio, rating } = props.user
  const mockUser = {
    bio: 'this is my really really long bio that i have written to explain why i like to drive very far distances and come across as good company so people will want to join me. I am a very lonely man',
    profilePic: 'images/Avatarprofpic.png',
    rating: '★ 5/5'
  }

  return (
    <>
      <div className="user-info">
        <img src={mockUser.profilePic}></img>
        <div className='user-info-text'>
          <span className="profile-name"> {firstName}{lastName}</span>
          <span className="bio-header-text">{mockUser.rating}</span>
        </div>
      </div>
      <div className='bio-box'>
        <span className="bio-header-text"><b>Bio:</b><br></br></span>
        {mockUser.bio}
      </div>
      {hasVehicle &&
            <div className="vehicle-box">
              <span className="bio-header-text"><b>Vehicle Info:</b><br></br></span>
              <span><b>Make: </b>{props.car.make} {props.car.model}<br></br></span>
              <span><b>year: </b>{props.car.year} <br></br></span>
              <span><b>Colour: </b>{props.car.colour}</span>
              <div className="bio-buttons">
                <span>EDIT PROFILE</span>
              </div>
            </div>
      }
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(profileInfo)
