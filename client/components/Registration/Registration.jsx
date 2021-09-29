import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField } from '@mui/material'
import store from '../../store'

import { addUser } from '../../apis/users'

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long'),
  age: Yup.string()
    .required('Required'),
  phoneNumber: Yup.string()
    .required('Required')
    .min(7, 'Sorry, this is not a valid number')
})

function Register ({ user }) {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      age: ''
    },
    onSubmit: async values => {
      const { firstName, lastName, phoneNumber } = values
      const newUser = { values, user }
      if (values.age <= 18) {
        alert('Sorry you must be 18 years old to use Vroom')
      } else {
        try {
          await addUser(newUser)
          store.dispatch({ type: 'SET_USER', user: { ...user, firstName, lastName, phoneNumber } })
          history.push('/')
        } catch (error) {
          console.error(error)
        }
      }
    },
    validationSchema: registerSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? formik.errors[inputName]
      : false
  }

  return (
    <>
      <div className="forms">
        <section className='flex-container'>
          <form className='column-6' onSubmit={formik.handleSubmit}>
            <div className="field">
              <div className="row">
                <div className="column">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    label={showAnyErrors('firstName') ? showAnyErrors('firstName') : 'First name'}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  />
                </div>
                <div className="column">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    label={showAnyErrors('lastName') ? showAnyErrors('lastName') : 'Last name'}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id='age'
                    name='age'
                    type='age'
                    placeholder='Age'
                    onChange={formik.handleChange}
                    label={showAnyErrors('age') ? showAnyErrors('age') : 'Age'}
                    value={formik.values.age}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                  />
                </div>
                <div className="column">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone number"
                    label={showAnyErrors('phoneNumber') ? showAnyErrors('phoneNumber') : 'Phone number'}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  />
                </div>
              </div>
              <div className="postRideButton">
                <button className='orange-register-button animate__infinite' type='submit' data-testid='submitButton'>Register</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register)
