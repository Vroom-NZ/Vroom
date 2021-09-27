import React from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { TextField } from '@mui/material'

import { addCar } from '../../apis/cars'

const carSchema = Yup.object().shape({
  make: Yup.string()
    .required('Required'),
  model: Yup.string()
    .required('Required'),
  year: Yup.string()
    .required('Required'),
  licensePlate: Yup.string()
    .required('Required'),
  colour: Yup.string()
    .required('Required'),
  registration: Yup.string()
    .required('Required'),
  wof: Yup.string()
    .required('Required')
})

function RegisterCar ({ user }) {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      make: '',
      model: '',
      year: '',
      colour: '',
      licensePlate: '',
      registration: '',
      wof: ''
    },

    onSubmit: values => {
      addCar(values, user) && history.push('/drivers')
    },
    validationSchema: carSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? formik.errors[inputName]
      : false
  }

  return (
    <>
      <section className='flex-container'>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="make"
              name="make"
              placeholder="Make"
              label={showAnyErrors('make') ? showAnyErrors('make') : 'Make'}
              value={formik.values.make}
              onChange={formik.handleChange}
              error={formik.touched.make && Boolean(formik.errors.make)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id='model'
              name='model'
              type='model'
              placeholder='Model'
              onChange={formik.handleChange}
              label={showAnyErrors('model') ? showAnyErrors('model') : 'Model'}
              value={formik.values.model}
              error={formik.touched.model && Boolean(formik.errors.model)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="year"
              name="year"
              placeholder="Year"
              label={showAnyErrors('year') ? showAnyErrors('year') : 'Year'}
              value={formik.values.year}
              onChange={formik.handleChange}
              error={formik.touched.year && Boolean(formik.errors.year)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="colour"
              name="colour"
              placeholder="Colour"
              label={showAnyErrors('colour') ? showAnyErrors('colour') : 'Colour'}
              value={formik.values.colour}
              onChange={formik.handleChange}
              error={formik.touched.colour && Boolean(formik.errors.colour)}
            />
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="licensePlate"
              name="licensePlate"
              placeholder="License plate"
              label={showAnyErrors('licensePlate') ? showAnyErrors('licensePlate') : 'License plate'}
              value={formik.values.licensePlate}
              onChange={formik.handleChange}
              error={formik.touched.licensePlate && Boolean(formik.errors.licensePlate)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="registration"
              name="registration"
              placeholder="Registration"
              label={showAnyErrors('registration') ? showAnyErrors('registration') : 'Registration'}
              value={formik.values.registration}
              onChange={formik.handleChange}
              error={formik.touched.registration && Boolean(formik.errors.registration)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="wof"
              name="wof"
              placeholder="W.O.F"
              label={showAnyErrors('wof') ? showAnyErrors('wof') : 'W.O.F'}
              value={formik.values.wof}
              onChange={formik.handleChange}
              error={formik.touched.wof && Boolean(formik.errors.wof)}
            />
            <br/>
            <button className='button-primary' type='submit' data-testid='submitButton'>Register your car!</button>
          </div>
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

export default connect(mapStateToProps)(RegisterCar)
