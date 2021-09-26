import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [
    {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      auth0Id: '',
      bio: '',
      profilePic: '',
      rating: '',
      hasVehicle: '',
      carId: ''
    }
  ]
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload)
    }
  }
})
