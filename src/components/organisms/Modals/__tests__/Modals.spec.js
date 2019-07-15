import React from 'react'
import { render } from 'react-testing-library'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'

import Modals from '..'

const mockStore = configureStore([])

let props
let utils

describe('Components/Molecules/Modals', () => {
  beforeEach(() => {
    const initialState = {
      genres: {
        filter: {},
      },
      modals: [
        {
          id: 'modalId01',
          type: 'confirmation',
          content: {
            text: 'Do you confirm?',
          },
          onClose: jest.fn(),
          onConfirm: jest.fn(),
        },
      ],
      user: {
        profile: {
          user: {
            role: 'User',
          },
        },
      },
    }
    const store = mockStore(initialState)

    props = {
      closeModal: jest.fn(),
    }

    utils = render(
      <Root store={store}>
        <Modals {...props} />
      </Root>,
    )
  })

  it('renders', () => {
    const modals = utils.getByTestId('modals')
    expect(modals).toBeDefined()
    expect(modals.children.length).toEqual(1)
  })
})
