import React from 'react'

import styles from './button.module.scss'

const Button = ({
  className,
  children,
  disabled,
  onClick,
  shadow,
  type,
  ...rest
}) => (
  <button
    className={`${styles.button} ${shadow ? styles.shadow : ''} ${className}`}
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
  shadow: false,
  type: null,
}

export default Button
