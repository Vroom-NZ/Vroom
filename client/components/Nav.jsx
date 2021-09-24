import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav (props) {
  const { user } = props
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin (event) {
    event.preventDefault()
    login()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout()
  }

  function handleRegister (event) {
    event.preventDefault()
    register()
  }

  return (
    <div>
      <div className='main-title'>
        {/* <section className='nav-item'> */}
        <IfAuthenticated>
          <div className='nav-hello'>
            {/* <p>Hello, {user.name}</p> */}
          </div>
          <div className='nav-button-container'>
            <Link to='/' className='signin-register-buttons animate__infinite'>Home</Link>
            <Link to='/profile' className='signin-register-buttons animate__infinite'>Profile</Link>
            <Link to='/drivers' className='signin-register-buttons animate__infinite'>Post a ride </Link>
            <a href='/' onClick={handleLogoff} className='signin-register-buttons animate__infinite'>Log out</a>
          </div>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <div className='nav-hello'>
            {/* <p>Hello, guest</p> */}
          </div>
          <div className='nav-button-container'>
            <a href='/' onClick={handleLogin} className='signin-register-buttons animate__infinite'>Sign in</a>
            <a href='/' onClick={handleRegister} className='signin-register-buttons animate__infinite'>Register</a>
          </div>
        </IfNotAuthenticated>
        {/* </section> */}
      </div>
    </div >
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Nav)
