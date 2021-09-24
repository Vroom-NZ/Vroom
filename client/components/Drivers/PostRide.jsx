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

import { addRides } from '../../apis/drivers'
// import { getUsers } from '../../apis/users'

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
    onSubmit: values => {
      const newRide = { values }
      addRides(newRide) && ridePosted() && history.push('/')
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
      <section className='flex-container'>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="startLocation"
              name="startLocation"
              placeholder="Start location"
              label={showAnyErrors('startLocation') ? showAnyErrors('startLocation') : 'Start location'}
              value={formik.values.startLocation}
              onChange={formik.handleChange}
              error={formik.touched.startLocation && Boolean(formik.errors.startLocation)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="destination"
              name="destination"
              placeholder="Destination.."
              label={showAnyErrors('destination') ? showAnyErrors('destination') : 'Destination..'}
              value={formik.values.destination}
              onChange={formik.handleChange}
              error={formik.touched.destination && Boolean(formik.errors.destination)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id='leavingTime'
              name='leavingTime'
              type='leavingTime'
              placeholder='Leaving time'
              onChange={formik.handleChange}
              label={showAnyErrors('leavingTime') ? showAnyErrors('leavingTime') : 'Leaving time'}
              value={formik.values.leavingTime}
              error={formik.touched.leavingTime && Boolean(formik.errors.leavingTime)}
            />
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="arrivalTime"
              name="arrivalTime"
              placeholder="Arrival time"
              label={showAnyErrors('arrivalTime') ? showAnyErrors('arrivalTime') : 'Arrival time'}
              value={formik.values.arrivalTime}
              onChange={formik.handleChange}
              error={formik.touched.arrivalTime && Boolean(formik.errors.arrivalTime)}
            />
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
            <br/>
            <TextField
              sx={{ margin: '8px' }}
              className = 'InputField'
              id='date'
              name='date'
              type='date'
              placeholder='Date'
              onChange={formik.handleChange}
              label={showAnyErrors('date') ? showAnyErrors('date') : 'Date'}
              value={formik.values.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
            />
            <br/>
            <TextField
              id="seatsAvailable"
              className = 'InputField'
              name="seatsAvailable"
              select
              label={showAnyErrors('seatsAvailable') ? showAnyErrors('seatsAvailable') : 'Seats'}
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
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="pets"
                  control={<Checkbox />}
                  label="Pets Allowed"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="masks"
                  control={<Checkbox />}
                  label="Mandatory Masks"
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
            <br/>
            <button className='button-primary' type='submit' data-testid='submitButton'>Post a ride!</button>
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

export default connect(mapStateToProps)(Ride)
