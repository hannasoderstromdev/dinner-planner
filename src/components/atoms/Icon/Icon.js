import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({
  className,
  color,
  testId,
  icon,
  iconsize,
  onMouseOver,
  onMouseOut,
}) => (
  <FontAwesomeIcon
    className={className}
    color={color}
    data-testid={testId ? testId : 'icon'}
    icon={icon}
    iconsize={iconsize}
    onBlur={onMouseOut}
    onFocus={onMouseOver}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
  />
)

Icon.defaultProps = {
  className: '',
  color: '',
  iconsize: '1rem',
  onMouseOut: null,
  onMouseOver: null,
  testId: undefined,
}

export default Icon
