import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from '..'

describe('Components/Molecules/Navigation', () => {
  it('renders', () => {
    const { getByText, getByTestId } = render(
      <Router>
        <Navigation />
      </Router>,
    )
    expect(getByText('Home')).toBeDefined()
    expect(getByText('Private')).toBeDefined()
    expect(getByText('Settings')).toBeDefined()
    expect(getByTestId('icon')).toBeDefined()
  })
})
