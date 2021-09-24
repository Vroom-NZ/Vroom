import React from 'react'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const rideSchema = Yup.object().shape({
  seats: Yup.string()
    .required('Required')

})

function SearchBar () {
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

  const formik = useFormik({
    initialValues: {
      seats: ''
    },
    onSubmit: values => {
      console.log(values)
    },

    validationSchema: rideSchema
  })

  function showAnyErrors (inputName) {
    return formik.errors[inputName] && formik.touched[inputName]
      ? formik.errors[inputName]
      : false
  }

  return (
    <div className="searchbar-container">
      <div className='wrap'>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Leaving from..."></input>
        </div>
      </div>
      <div className='wrap'>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Destination..."></input>
        </div>
      </div>
      {/* <div className='wrap'>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Date"></input>
        </div>
      </div> */}
      <div className="wrap">
        <div className="search">
          <input type="date" className="searchTerm" id="" name=""
            value="2021-09-24"
            min="2021-09-24" max="2023-09-24"></input>
        </div>
      </div>
      <div className="wrap">
        <div className="passengerMenu">
          <TextField
            id="standard-basic" variant="standard"
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
      <button type="submit" className="searchButton">
        <i className="fa fa-search"><img src='images/MagnifyingGlass.png'></img></i>
      </button>

    </div>
  )
}

export default SearchBar
