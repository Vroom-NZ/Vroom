import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import Ride from './PostRide'
import { renderWithRedux } from '../../test-utils'

import { addRides } from '../../apis/rides'

jest.mock('../../apis/rides')

describe('Register form field', () => {
  it.skip('rendering and submitting a postRide Formik form', async () => {
    addRides.mockImplementation((rides) => {
      expect(rides.values.startLocation).toBe('Auckland')
      expect(rides.values.destination).toBe('Hamilton')
      expect(rides.values.date).toBe('30/09/2021')
      expect(rides.values.leavingTime).toBe('12:00pm')
      expect(rides.values.arrivalTime).toBe('15:00pm')
      expect(rides.values.seatsAvailable).toBe('2')
      expect(rides.values.cost).toBe('10')
      return Promise.resolve()
    })
    renderWithRedux(<Ride/>)

    const button = await screen.findByRole('button', { name: /post/i })

    userEvent.type(screen.getByLabelText(/leaving from.../i), 'Auckland')
    userEvent.type(screen.getByLabelText(/destination/i), 'Hamilton')
    userEvent.type(screen.getByPlaceholderText(/leaving time/i), '12:00pm')
    userEvent.type(screen.getByPlaceholderText(/arrival time/i), '15:00pm')
    userEvent.type(screen.getByLabelText(/cost/i), '10')
    userEvent.type(screen.getByPlaceholderText(/date/i), '30/09/2021')
    userEvent.type(screen.getByLabelText(/passengers/i), '2')
    userEvent.click(button)

    return await waitFor(() =>
      expect(addRides).toHaveBeenCalled()
    )
  })
  it('required all fields', async () => {
    renderWithRedux(<Ride/>)

    userEvent.clear(screen.getByLabelText(/leaving from.../i))
    userEvent.clear(screen.getByLabelText(/destination/i))
    userEvent.clear(screen.getByPlaceholderText(/leaving time/i))
    userEvent.clear(screen.getByPlaceholderText(/arrival time/i))
    userEvent.clear(screen.getByLabelText(/cost/i))
    userEvent.clear(screen.getByPlaceholderText(/date/i))

    userEvent.click(screen.getByRole('button', { name: /post/i }))

    const element = await screen.findAllByText('Required')
    expect(element[0]).toBeInTheDocument()
  })
})
