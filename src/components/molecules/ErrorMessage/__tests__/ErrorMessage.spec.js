import React from 'react'
import { render } from 'react-testing-library'

import ErrorMessage from '..'
import Icon from 'components/atoms/Icon'

describe('<ErrorMessage />', () => {
  const props = {
    renderIcon: <Icon icon={['fa', 'exclamation-triangle']} />,
  }

  it('renders', () => {
    const textMessage = 'Error Message'
    const { container } = render(
      <ErrorMessage {...props}>{textMessage}</ErrorMessage>,
    )
    const errorMessage = container.children[0]

    expect(errorMessage).toBeDefined()
    expect(errorMessage).toHaveTextContent(textMessage)
  })
})
