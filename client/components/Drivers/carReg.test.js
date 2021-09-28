import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import RegisterCar from '../Drivers/CarReg'
import { renderWithRedux } from '../../test-utils'

import { addCar } from '../../apis/cars'

jest.mock('../../apis/cars')

describe('CarRegister form field', () => {
  it('rendering and submitting a carReg form with Redux & Formik', async () => {
    addCar.mockImplementation((car) => {
      expect(car.make).toBe('Toyota')
      expect(car.model).toBe('Ipsum')
      expect(car.year).toBe('1996')
      expect(car.colour).toBe('blue')
      expect(car.licensePlate).toBe('BLZ420')
      expect(car.registration).toBe('00000')
      expect(car.wof).toBe('8877665')
      return Promise.resolve()
    })
    renderWithRedux(<RegisterCar/>)

    userEvent.type(screen.getByLabelText(/make/i), 'Toyota')
    userEvent.type(screen.getByLabelText(/model/i), 'Ipsum')
    userEvent.type(screen.getByLabelText(/year/i), '1996')
    userEvent.type(screen.getByLabelText(/colour/i), 'blue')
    userEvent.type(screen.getByLabelText(/license plate/i), 'BLZ420')
    userEvent.type(screen.getByLabelText(/registration/i), '00000')
    userEvent.type(screen.getByLabelText(/w.o.f/i), '8877665')

    userEvent.click(screen.getByRole('button', { name: /register your car/i }))

    return await waitFor(() =>
      expect(addCar).toHaveBeenCalled()
    )
  })
  it('all fields are required', async () => {
    renderWithRedux(<RegisterCar/>)

    userEvent.clear(screen.getByLabelText(/make/i))
    userEvent.clear(screen.getByLabelText(/model/i))
    userEvent.clear(screen.getByLabelText(/year/i))
    userEvent.clear(screen.getByLabelText(/colour/i))
    userEvent.clear(screen.getByLabelText(/license plate/i))
    userEvent.clear(screen.getByLabelText(/registration/i))
    userEvent.clear(screen.getByLabelText(/w.o.f/i))

    userEvent.click(screen.getByRole('button', { name: /register your car/i }))

    const element = await screen.findAllByText('Required')
    expect(element[0]).toBeInTheDocument()
  })
})
