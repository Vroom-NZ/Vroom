import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { getRides } from '../apis/rides'

const searchSchema = Yup.object().shape({
  leavingFrom: Yup.string()
    .required('Required'),
  destination: Yup.string()
    .required('Required'),
  date: Yup.string()
    .required('Required'),
  seats: Yup.string()
    .required('Required')
})

function SearchBar ({ rides }) {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      leavingFrom: '',
      destination: '',
      date: '',
      seats: ''
    },
    onSubmit: values => {
      console.log(values)
      // const newSearch = { values }
      history.push('/viewrides')
    },
    validationSchema: searchSchema
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
      <div className="searchbar-container">
        <div className="">
          <form onSubmit={formik.handleSubmit}>
            <div className="">
              <TextField
                sx={{ margin: '8px' }}
                className = 'searchInputField'
                id="leavingFrom"
                name="leavingFrom"
                placeholder="Leaving from.."
                label={showAnyErrors('leavingFrom') ? showAnyErrors('leavingFrom') : 'Leaving from..'}
                value={formik.values.leavingFrom}
                onChange={formik.handleChange}
                error={formik.touched.leavingFrom && Boolean(formik.errors.leavingFrom)}
              />
            </div>
            <div className="">
              <TextField
                sx={{ margin: '8px' }}
                className = 'searchInputField'
                id="destination"
                name="destination"
                placeholder="Destination.."
                label={showAnyErrors('destination') ? showAnyErrors('destination') : 'Destination..'}
                value={formik.values.destination}
                onChange={formik.handleChange}
                error={formik.touched.destination && Boolean(formik.errors.destination)}
              />
            </div>
            <div className="dateinputfield">
              <TextField
                sx={{ margin: '8px' }}
                className = 'searchInputField'
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
            <div className="">
              <TextField
                sx={{ margin: '8px', width: '240px' }}
                id="seats"
                className = 'searchInputField searchSeatsField'
                name="seats"
                select
                label={showAnyErrors('seats') ? showAnyErrors('seats') : 'Passengers'}
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
            <div className=''>
              <button className="searchButton" type='submit' data-testid='submitButton'>
                <i className="fa fa-search"><img src='images/Vectormag2.png'></img></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    rides: state.rides
  }
}

export default connect(mapStateToProps)(SearchBar)
