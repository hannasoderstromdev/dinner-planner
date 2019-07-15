import React from 'react'

import styles from './button.module.scss'

const Button = ({ className, children, onClick, disabled, type, ...rest }) => (
  <button
    className={`${styles.button} ${className}`}
    data-testid="button"
    disabled={disabled}
    onClick={onClick}
    type={type}
    {...rest}
  >
    {children}
  </button>
)

Button.defaultProps = {
  className: null,
  disabled: false,
  onClick: null,
  type: null,
}

export default Button
