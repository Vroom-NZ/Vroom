import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { getRides } from '../apis/rides'
import store from './../store'

const searchSchema = Yup.object().shape({
  startLocation: Yup.string()
    .required('Required'),
  destination: Yup.string()
    .required('Required'),
  date: Yup.string()
    .required('Required'),
  seatsAvailable: Yup.string()
    .required('Required')
})

function SearchBar () {
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      startLocation: '',
      destination: '',
      date: '',
      seatsAvailable: ''
    },
    onSubmit: async values => {
      try {
        store.dispatch({ type: 'SEARCH', search: values })
        history.push('/rides')
      } catch (error) {
        console.error(error)
      }
    },
    validationSchema: searchSchema
  })

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
      <div>
        <section>
          <form onSubmit={formik.handleSubmit}>
            <div className="searchbar-container">
              <div className="row">
                <div className="column">
                  <TextField
                    sx={{ margin: '8px' }}
                    className = 'searchInputField'
                    id="startLocation"
                    name="startLocation"
                    placeholder="Leaving from.."
                    label={showAnyErrors('startLocation') ? showAnyErrors('startLocation') : 'Leaving from..'}
                    value={formik.values.startLocation}
                    onChange={formik.handleChange}
                    error={formik.touched.startLocation && Boolean(formik.errors.startLocation)}
                  />
                </div>
                <div className="column">
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
                <div className="column">
                  {/* className="dateinputfield" */}
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
                <div className="column">
                  <TextField
                    sx={{ margin: '8px', width: '240px' }}
                    id="seatsAvailable"
                    className = 'searchInputField searchSeatsField'
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
                <button className="searchButton" type='submit' data-testid='submitButton'>
                  <img src='images/MagnifyingGlass.png'></img>
                </button>
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
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchBar)
