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

import { addRide } from '../../apis/drivers'

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
    .required('Required'),
  petsAllowed: Yup.boolean()
    .required('Required'),
  masksMandatory: Yup.boolean()
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
      addRide(newRide) && history.push('/profile/rides')
    },
    validationSchema: rideSchema
  })

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
      <section className='flex-container'>
        <form onSubmit={formik.handleSubmit}>
          <div className="field">
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
              sx={{ margin: '8px' }}
              className = 'InputField'
              id="seats"
              name="seats"
              placeholder="Seats Available"
              label={showAnyErrors('seats') ? showAnyErrors('seats') : 'Seats Available'}
              value={formik.values.seats}
              onChange={formik.handleChange}
              error={formik.touched.seats && Boolean(formik.errors.seats)}
            />
            <TextField
              id="seats"
              className = 'InputField'
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
            <button className='button-primary' type='submit' data-testid='submitButton'>Post a ride!</button>
          </div>
        </form>
      </section>
    </>
  )
}
