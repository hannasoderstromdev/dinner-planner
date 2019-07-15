import React from 'react'
import { render, fireEvent } from 'react-testing-library'

import Button from '..'

describe('<Button />', () => {
  let onClick
  let props

  beforeEach(() => {
    onClick = jest.fn()
    props = {
      onClick,
      disabled: false,
    }
  })

  it('renders a button', () => {
    const { getByTestId } = render(<Button {...props}>Test Button</Button>)
    const button = getByTestId('button')
    expect(button).toBeDefined()
    expect(button).toHaveTextContent('Test Button')
  })

  describe('handles props', () => {
    it('type submit', () => {
      props = {
        type: 'submit',
      }
      const { getByTestId } = render(<Button {...props}>Test Button</Button>)
      const button = getByTestId('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('disabled', () => {
      props = {
        disabled: true,
      }
      const { getByTestId } = render(<Button {...props}>Test Button</Button>)
      const button = getByTestId('button')
      expect(button).toHaveAttribute('disabled', '')
    })
  })

  it('runs onClick when clicked', () => {
    const { getByTestId } = render(<Button {...props}>Test Button</Button>)
    const button = getByTestId('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
