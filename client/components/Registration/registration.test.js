import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'

import Register from './Registration'
import { renderWithRedux } from '../../test-utils'

import { addUser } from '../../apis/users'

jest.mock('../../apis/users')

describe('Register form field', () => {
  it('rendering and submitting a basic Formik form', async () => {
    addUser.mockImplementation((user) => {
      expect(user.values.firstName).toBe('John')
      expect(user.values.lastName).toBe('Dee')
      expect(user.values.phoneNumber).toBe('02102752710')
      return Promise.resolve()
    })
    renderWithRedux(<Register/>)

    userEvent.type(screen.getByLabelText(/first name/i), 'John')
    userEvent.type(screen.getByLabelText(/last name/i), 'Dee')
    userEvent.type(screen.getByLabelText(/phone number/i), '02102752710')
    userEvent.type(screen.getByLabelText(/age/i), '25')

    userEvent.click(screen.getByRole('button', { name: /register/i }))

    return await waitFor(() =>
      expect(addUser).toHaveBeenCalled()
    )
  })
  it('all fields are required', async () => {
    renderWithRedux(<Register/>)

    userEvent.clear(screen.getByLabelText(/first name/i))
    userEvent.clear(screen.getByLabelText(/last name/i))
    userEvent.clear(screen.getByLabelText(/phone number/i))
    userEvent.clear(screen.getByLabelText(/age/i))

    userEvent.click(screen.getByRole('button', { name: /register/i }))

    const element = await screen.findAllByText('Required')
    expect(element[0]).toBeInTheDocument()
  })
})
