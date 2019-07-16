import React from 'react'

import styles from './Navigation.module.scss'

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul>
      <li>
        <button className={`${styles.button} ${styles.active}`}>
          Generate Dinner
        </button>
      </li>
      <li>
        <button className={styles.button}>Generate Schedule</button>
      </li>
    </ul>
  </nav>
)

export default Navigation
