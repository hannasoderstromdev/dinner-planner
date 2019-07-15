import React from 'react'
import { render } from 'react-testing-library'

import Spinner from '..'

describe('<Spinner />', () => {
  it('renders', () => {
    const { getByTestId } = render(<Spinner />)
    expect(getByTestId('spinner').tagName).toBe('DIV')
  })
})
