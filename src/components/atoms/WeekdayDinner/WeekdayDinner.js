import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import styles from './WeekdayDinner.module.scss'

const WeekdayDinner = ({
  checked,
  dinner,
  onCheckChange,
  weekday,
  onRegenerate,
}) => (
  <div className={styles.wrapper}>
    <label>
      <input
        checked={checked}
        name="checkbox"
        onClick={() => onCheckChange(weekday.toLowerCase(), !checked)}
        type="checkbox"
      />
      <span>{weekday}</span>
    </label>
    <div className={styles.dinnerLink}>
      <Link to={dinner && dinner.link}>{dinner && dinner.name}</Link>
      <Button className={styles.iconButton} onClick={onRegenerate}>
        <Icon color="#C4C4C4" icon={['fas', 'sync-alt']} />
      </Button>
    </div>
  </div>
)

export default WeekdayDinner
