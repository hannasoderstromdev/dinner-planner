import React from 'react'
import { render } from 'react-testing-library'

import Icon from '..'

describe('<Icon />', () => {
  it('renders', () => {
    const props = {
      icon: ['fas', 'times'],
    }
    const { getByTestId } = render(<Icon {...props} />)
    expect(getByTestId('icon').tagName).toBe('svg')
  })
})
