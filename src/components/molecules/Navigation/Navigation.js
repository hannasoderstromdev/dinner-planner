import React from 'react'

import Icon from 'components/atoms/Icon'

import styles from './Navigation.module.scss'

const Navigation = ({ currentTab }) => (
  <nav className={styles.navigation}>
    <ul>
      <li>
        <button
          className={`${styles.button} ${
            currentTab === 'generate-dinner' ? styles.active : ''
          }`}
        >
          <Icon color="#DEDEDE" icon={['fas', 'sync-alt']} /> Generate Dinner
        </button>
      </li>
      <li>
        <button
          className={`${styles.button} ${
            currentTab === 'generate-schedule' ? styles.active : ''
          }`}
        >
          Generate Schedule
        </button>
      </li>
    </ul>
  </nav>
)

export default Navigation
