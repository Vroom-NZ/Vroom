import React from 'react'
import { connect } from 'react-redux'

function profileInfo (props) {
  const { firstName, lastName, phoneNumber, hasVehicle, bio, profilePic } = props.user
  const { make, model, year, colour } = props.car
  // const mockUser = {
  //   firstName: 'Sophia',
  //   lastName: 'Lawler',
  //   hasVehicle: true,
  //   bio: 'This is my bio wow so fun!',
  //   profilePic: 'https://media.npr.org/assets/img/2021/08/23/about_love-a5c5a160b609b952ef65d037dc214fe3dc8b692f-s800-c85.webp',
  //   carId: 12
  // }

  return (
    <>
      <div className="profile-container">
        <p> {firstName} {lastName} </p>
        <p> {bio}</p>
        <p>{phoneNumber}</p>
        {hasVehicle &&
        <>
          <p> My Car</p>
          <p> {make} {model} {colour} - {year} </p>
        </>
        }
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
