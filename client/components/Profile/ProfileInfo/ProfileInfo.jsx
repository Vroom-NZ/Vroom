import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateUser, deleteUser } from '../../../apis/users'
import { getLogoutFn } from '../../../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

function profileInfo (props) {
  const logout = getLogoutFn(useAuth0)

  const [edit, setEdit] = useState(false)
  const { auth0Id, firstName, lastName, hasVehicle, profilePic, bio, rating } = props.user
  const newUser = {
    profilePic: 'images/kieran.jpg',
    rating: '★ 5/5'
  }

  const [myBio, setMyBio] = useState('')
  const [myPic, setMyPic] = useState(null)

  function handleClick () {
    setEdit(true)
  }

  async function handleSubmit () {
    try {
      setEdit(false)
      await updateUser(myBio, myPic, auth0Id)
    } catch (error) {
      console.error(error)
    }
  }

  function handleDelete () {
    console.log('delete user button works')
    deleteUser(auth0Id) && logout()
  }

  return (
    <>
      { edit === true
        ? <>
          <div className="user-info">
          {myPic 
           ? <img width={"100%"} src={URL.createObjectURL(myPic)} />
           : <img src={profilePic}></img>
          }
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
                  name="myBio"
                  onChange={(event) => {setMyBio(event.target.value)}}
                  placeholder="My Bio"
                />
                 </div>
                <input
                  alt='Not Found'
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    setMyPic(event.target.files[0]);
                  }}
                  placeholder="My Pic"
                  />
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
            {myBio || bio}
          </div>
        </>}
      {hasVehicle &&
            <div className="vehicle-box">
              <span className="bio-header-text"><b>Vehicle Info:</b><br></br></span>
              <span><b>Make: </b>{props.car.make} {props.car.model}<br></br></span>
              <span><b>year: </b>{props.car.year} <br></br></span>
              <span><b>Colour: </b>{props.car.colour}</span>
            </div>
      }
      <div className="bio-buttons" onClick={(() => handleClick())}>
        <span>EDIT PROFILE</span>
      </div>
      <div className="bio-buttons-delete" onClick={(() => handleDelete())}>
        <span>DELETE PROFILE</span>
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
