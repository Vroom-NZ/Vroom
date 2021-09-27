import React from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import store from '../../store'

import { addRides } from '../../apis/rides'

const rideSchema = Yup.object().shape({
  startLocation: Yup.string()
    .required('Required'),
  destination: Yup.string()
    .required('Required'),
  leavingTime: Yup.string()
    .required('Required'),
  arrivalTime: Yup.string()
    .required('Required'),
  cost: Yup.string()
    .required('Required'),
  date: Yup.string()
    .required('Required'),
  seatsAvailable: Yup.string()
    .required('Required')
})

function Ride ({ user }) {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      startLocation: '',
      destination: '',
      date: '',
      leavingTime: '',
      arrivalTime: '',
      seatsAvailable: '',
      cost: ''
    },
    onSubmit: async values => {
      try {
        await addRides(values, user)
        store.dispatch({ type: 'SUBMIT', ride: values })
        ridePosted()
        history.push('/')
      } catch (error) {
        console.error(error)
      }
    },
    validationSchema: rideSchema
  })

  function ridePosted () {
    alert('Your ride has been posted. Happy travels!')
  }

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? formik.errors[inputName]
      : false
  }
  const seatsAvailable = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '2',
      label: '2'
    },
    {
      value: '3',
      label: '3'
    },
    {
      value: '4',
      label: '4'
    },
    {
      value: '5',
      label: '5'
    },
    {
      value: '6',
      label: '6'
    }
  ]

  return (
    <>
      <div className="forms">
        <section className='flex-container'>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="row">
                <div className="column column-flex">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="startLocation"
                    name="startLocation"
                    placeholder="Leaving from.."
                    label={showAnyErrors('startLocation') ? showAnyErrors('startLocation') : 'Leaving from...'}
                    value={formik.values.startLocation}
                    onChange={formik.handleChange}
                    error={formik.touched.startLocation && Boolean(formik.errors.startLocation)}
                  />
                </div>
                <div className="column column-flex">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="destination"
                    name="destination"
                    placeholder="Destination.."
                    label={showAnyErrors('destination') ? showAnyErrors('destination') : 'Destination...'}
                    value={formik.values.destination}
                    onChange={formik.handleChange}
                    error={formik.touched.destination && Boolean(formik.errors.destination)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="column column-flex">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id='leavingTime'
                    name='leavingTime'
                    type='time'
                    placeholder='Leaving time'
                    onChange={formik.handleChange}
                    label={showAnyErrors('leavingTime') ? showAnyErrors('leavingTime') : ''}
                    value={formik.values.leavingTime}
                    error={formik.touched.leavingTime && Boolean(formik.errors.leavingTime)}
                  />
                </div>
                <div className="column column-flex">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="arrivalTime"
                    name="arrivalTime"
                    type='time'
                    placeholder="Arrival time"
                    label={showAnyErrors('arrivalTime') ? showAnyErrors('arrivalTime') : ''}
                    value={formik.values.arrivalTime}
                    onChange={formik.handleChange}
                    error={formik.touched.arrivalTime && Boolean(formik.errors.arrivalTime)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="column column-flex">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="cost"
                    name="cost"
                    placeholder="Cost"
                    label={showAnyErrors('cost') ? showAnyErrors('cost') : 'Cost'}
                    value={formik.values.cost}
                    onChange={formik.handleChange}
                    error={formik.touched.cost && Boolean(formik.errors.cost)}
                  />
                </div>
                <div className="column dateinputfield column-flex">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id='date'
                    name='date'
                    type='date'
                    placeholder='date'
                    onChange={formik.handleChange}
                    label={showAnyErrors('date') ? showAnyErrors('date') : ''}
                    value={formik.values.date}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                  />
                </div>
                <div className="column ">
                  <TextField
                    sx={{ margin: '8px', width: '240px' }}
                    id="seatsAvailable"
                    className = 'InputField seatsField'
                    name="seatsAvailable"
                    select
                    label={showAnyErrors('seatsAvailable') ? showAnyErrors('seatsAvailable') : 'Passengers'}
                    value={formik.values.seatsAvailable}
                    onChange={formik.handleChange}
                    error={formik.touched.seatsAvailable && Boolean(formik.errors.seatsAvailable)}
                  >
                    {seatsAvailable.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value={formik.values.petsAllowed}
                    control={<Checkbox />}
                    label="Pets Allowed"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="start"
                    control={<Checkbox />}
                    label="Mandatory Masks"
                    labelPlacement="start"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div className="postRideButton">
              <button className='orange-register-button animate__infinite' type='submit' data-testid='submitButton'>Post a ride!</button>
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

export default connect(mapStateToProps)(Ride)
