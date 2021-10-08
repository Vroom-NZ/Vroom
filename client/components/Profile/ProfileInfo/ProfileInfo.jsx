import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../../apis/users'

function profileInfo (props) {
  const [edit, setEdit] = useState(false)
  const { auth0Id, firstName, lastName, hasVehicle, profilePic, bio, rating } = props.user
  const newUser = {
    profilePic: 'images/kieran.jpg',
    rating: '★ 5/5'
  }

  const [myBio, setMyBio] = useState('')

  function handleClick () {
    setEdit(true)
  }

  async function handleSubmit () {
    try {
      await updateUser(myBio, auth0Id)
      setEdit(false)
    } catch (error) {
      console.error(error)
    }
  }

  function handleChange (event) {
    setMyBio(event.target.value)
  }

  return (
    <>
      { edit
        ? <>
          <div className="user-info">
            <img src={newUser.profilePic}></img>
            <div className='user-info-text'>
              <span className="profile-name"> {firstName}{lastName}</span>
              <span className="bio-header-text">{newUser.rating}</span>
            </div>
          </div>
          <div className='bio-box'>
            <span className="bio-header-text"><b>Bio:</b><br></br></span>
            <form onSubmit={(() => handleSubmit())}>
              <div>
                <input
                  type="text"
                  value={myBio}
                  onChange={handleChange}
                  placeholder={bio}
                />
              </div>
              <button className="bio-buttons" type='submit'>SAVE</button>
            </form>
          </div>
        </>
        : <>
          <div className="user-info">
            <img src={newUser.profilePic}></img>
            <div className='user-info-text'>
              <span className="profile-name"> {firstName}{lastName}</span>
              <span className="bio-header-text">{newUser.rating}</span>
            </div>
          </div>
          <div className='bio-box'>
            <span className="bio-header-text"><b>Bio:</b><br></br></span>
            {bio}
          </div>
        </>}
      {hasVehicle &&
            <div className="vehicle-box">
              <span className="bio-header-text"><b>Vehicle Info:</b><br></br></span>
              <span><b>Make: </b>{props.car.make} {props.car.model}<br></br></span>
              <span><b>year: </b>{props.car.year} <br></br></span>
              <span><b>Colour: </b>{props.car.colour}</span>
              <div className="bio-buttons" onClick={(() => handleClick())}>
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
