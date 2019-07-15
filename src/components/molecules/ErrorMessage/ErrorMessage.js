import React from 'react'

const ErrorMessage = ({ renderIcon, children }) => (
  <div>
    <div>{renderIcon}</div>
    {children}
  </div>
)

export default ErrorMessage
