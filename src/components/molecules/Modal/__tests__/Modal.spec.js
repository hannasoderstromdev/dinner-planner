import React from 'react'
import { render } from 'react-testing-library'
import configureStore from 'redux-mock-store'

import Root from 'components/Root'

import Modal from '..'

const mockStore = configureStore([])

let item
let props
let utils

describe('Components/Molecules/Modal', () => {
  beforeEach(() => {
    const initialState = {}
    const store = mockStore(initialState)
    item = {
      id: 'mid1',
      type: 'confirmation',
      content: {
        text: 'Do you confirm?',
      },
      onConfirm: jest.fn(),
    }
    props = {
      item,
      onClose: jest.fn(),
    }
    utils = render(
      <Root store={store}>
        <Modal {...props} />
      </Root>,
    )
  })

  it('renders confirmation modal', () => {
    const text = utils.getByText('Do you confirm?')
    expect(text).toBeDefined()
    const confirmButton = utils.getByText('Confirm')
    expect(confirmButton).toBeDefined()
    const closeButton = utils.getByText('Close')
    expect(closeButton).toBeDefined()
  })
})
