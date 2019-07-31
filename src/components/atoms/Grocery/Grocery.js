import React, { useState } from 'react'

import Icon from 'components/atoms/Icon'

import styles from './Grocery.module.scss'

const Grocery = ({ grocery }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <li className={styles.grocery}>
      <label className={isChecked ? styles.checked : styles.notChecked}>
        <input
          checked={isChecked}
          name="grocery"
          onClick={() => setIsChecked(!isChecked)}
          style={{ display: isChecked ? 'none' : 'inline' }}
          type="checkbox"
        />
        {isChecked ? <Icon icon={['fas', 'check']} /> : null}
        <span>{grocery}</span>
      </label>
    </li>
  )
}

export default Grocery
