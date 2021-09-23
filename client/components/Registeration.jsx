import React from 'react'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addUser } from '../apis/users'
import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  lastName: Yup.string()
    .required('Required')
    .min(2, 'This must be at least 2 characters long')
    .max(20, 'Sorry, this must be under 20 characters long')
})
function Register ({ user }) {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    },
    onSubmit: values => {
      const newUser = { values, user }
      addUser(newUser)
      history.push('/')
    },
    validationSchema: registerSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? <p className='inputError'>{formik.errors[inputName]}</p>
      : null
  }

  return (
    <>
      <section className='flex-container'>
        <form className='column-6' onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor='firstName' className='form-label'>First Name</label>
            {showAnyErrors('firstName')}
            <input
              className='form-input'
              id='firstName'
              name='firstName'
              placeholder='First Name'
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <label htmlFor='lastName' className='form-label'>Last Name</label>
            {showAnyErrors('lastName')}
            <input
              className='form-input'
              id='lastName'
              name='lastName'
              placeholder='Last Name'
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <label
              htmlFor='age'
              className='label'>Age</label>
            {showAnyErrors('age')}
            <input
              className='form-input'
              id='age'
              name='age'
              type='age'
              placeholder='Age'/>

            <label htmlFor='phoneNumber' className='form-label'>Phone number</label>
            {showAnyErrors('phoneNumber')}
            <input
              className='form-input'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Phone number'
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </div>
          <button className='button-primary' type='submit' data-testid='submitButton'>Register</button>
        </form>
      </section>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Register)
