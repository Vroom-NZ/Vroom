// import React from 'react'
// import { connect } from 'react-redux'

// function profileInfo (props) {
//   const { firstName, lastName, hasVehicle, profilePic, bio, rating } = props.user
//   const { make, model, year, colour } = props.car
//   const mockUser = {
//     bio: 'This is my bio wow so sick, lets vroomvroombaby!',
//     profilePic: 'images/Avatarprofpic.png',
//     rating: '★ 5/5'
//   }

//   return (
//     <>
//       <div className="profile-box">
//         <div className="personal-info">
//           <img className='avatar'src={mockUser.profilePic}></img>
//           <h1 className='text-margin'> {firstName} {lastName}  </h1>
//           <h2>{mockUser.rating}</h2>
//           <p className='bio-box'> {mockUser.bio}</p>
//           {hasVehicle &&
//             <div className="vehicle-box">
//               <h3> Vehicle Details</h3>
//               <p> {make} {model} </p>
//               <p> {year} </p>
//               <p>{colour}</p>
//             </div>
//           }
//         </div>
//       </div>
//     </>
//   )
// }

// function mapStateToProps (state) {
//   return {
//     user: state.user
//   }
// }

// export default connect(mapStateToProps)(profileInfo)
import React from 'react'
import ReactDOM from 'react-dom'

const ImgUpload = ({
  onChange,
  src
}) =>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img htmlFor="photo-upload" src={src}/>
    </div>
    <input id="photo-upload" type="file" onChange={onChange}/>
  </label>

const Bio = ({
  onChange,
  value
}) =>
  <div className="field">
    <label htmlFor="bio">
      Bio:
    </label>
    <input
      id="bio"
      type="text"
      onChange={onChange}
      maxLength="35"
      value={value}
      placeholder="Tell a little about yourself!"
      required/>
  </div>

const Profile = ({
  onSubmit,
  src,
  name,
  status
}) =>
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img htmlFor="photo-upload" src={src}/>
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="orange-register-button">Edit Profile </button>
    </form>
  </div>

const Edit = ({
  onSubmit,
  children
}) =>
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      {children}
      <button type="submit" className="orange-register-button">Save </button>
    </form>
  </div>

class CardProfile extends React.Component {
  state = {
    file: '',
    profilePic: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    Bio: '',
    active: 'edit'
  }

  photoUpload = e => {
    e.preventDefault()
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  editBIo = e => {
    const bio = e.target.value
    this.setState({
      bio
    })
  }

  handleSubmit= e => {
    e.preventDefault()
    const activeP = this.state.active === 'edit' ? 'profile' : 'edit'
    this.setState({
      active: activeP
    })
  }

  render () {
    const {
      profilePic,
      bio,
      active
    } = this.state
    return (
      <div>
        {(active === 'edit') ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={profilePic}/>
            <Bio onChange={this.editStatus} value={bio}/>
          </Edit>
        ) : (
          <Profile
            onSubmit={this.handleSubmit}
            src={profilePic}
            bio={bio}/>)}

      </div>
    )
  }
}

ReactDOM.render(
  <CardProfile/>,
  document.getElementById('root')
)
