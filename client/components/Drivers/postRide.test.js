import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Register from './Registration'
import { renderWithRedux } from '../../test-utils'

import { addUser } from '../../apis/users'

jest.mock('../../apis/users')

describe('Register form field', () => {
  it('rendering and submitting a basic Formik form', async () => {
    expect.assertions(4)
    addUser.mockImplementation((user) => {
      expect(user.firstName).toBe('John')
      expect(user.lastName).toBe('Dee')
      expect(user.phoneNumber).toBe('02102752710')
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
  it.skip('required to have more than two characters', async () => {
    renderWithRedux(<Register/>)

    userEvent.type(screen.getByLabelText(/first name/i), 'a')
    userEvent.type(screen.getByLabelText(/last name/i), 'b')
    userEvent.type(screen.getByLabelText(/age/i), '25')

    userEvent.click(screen.getByRole('button', { name: /register/i }))

    const element = await screen.findAllByText('This must be at least 2 characters long')
    expect(element[0]).toBeInTheDocument()
  })
})
