imimport React from 'react'

export default function profileInfo ({ user }) {

  // const { firstName, lastName, email, phoneNumber, hasVehicle, bio, profilePic, carId } = user
const mockUser = {
  firstName: Sophia,
  lastName: Lawler,
  hasVehicle: true,
  bio: "This is my bio wow so fun!",
  profilePic: "https://media.npr.org/assets/img/2021/08/23/about_love-a5c5a160b609b952ef65d037dc214fe3dc8b692f-s800-c85.webp",
  carId: 12
}


  return (
    <>
      <div className="profile-container">
        <p> {firstName} {lastName} </p>
        <p> </p>
        <p></p>
        {hasVehicle && 
        <p> display car info</p> }
      </div>
    </>
  )
}
