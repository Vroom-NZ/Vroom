import React from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'

import { addRides } from '../../apis/drivers'

const rideSchema = Yup.object().shape({
  leavingFrom: Yup.string()
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
  seats: Yup.string()
    .required('Required')
})

export default function Ride () {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      leavingFrom: '',
      destination: '',
      leavingTime: '',
      arrivalTime: '',
      cost: '',
      date: '',
      seats: '',
      petsAllowed: '',
      masksMandatory: ''
    },
    onSubmit: values => {
      console.log(values)
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
  const seats = [
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
            <div className="field">
              <div className="row">
                <div className="column">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'InputField'
                    id="leavingFrom"
                    name="leavingFrom"
                    placeholder="Leaving from.."
                    label={showAnyErrors('leavingFrom') ? showAnyErrors('leavingFrom') : 'Leaving from..'}
                    value={formik.values.leavingFrom}
                    onChange={formik.handleChange}
                    error={formik.touched.leavingFrom && Boolean(formik.errors.leavingFrom)}
                  />
                </div>
                <div className="column">
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
                </div>
              </div>
              <div className="row">
                <div className="column">
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
                </div>
                <div className="column">
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
                </div>
              </div>
              <div className="row">
                <div className="column">
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
                <div className="column dateinputfield">
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
                    sx={{ margin: '8px' }}
                    id="seats"
                    className = 'InputField seatsField'
                    name="seats"
                    select
                    label={showAnyErrors('seats') ? showAnyErrors('seats') : 'Seats'}
                    value={formik.values.seats}
                    onChange={formik.handleChange}
                    error={formik.touched.seats && Boolean(formik.errors.seats)}
                  >
                    {seats.map((option) => (
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
              <br/>
              <button className='postRideButton orange-register-button animate__infinite' type='submit' data-testid='submitButton'>Post a ride!</button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
