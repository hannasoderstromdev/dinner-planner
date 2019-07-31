import React from 'react'

import Icon from 'components/atoms/Icon'

import styles from './Navigation.module.scss'

const Navigation = ({ currentTab, setCurrentTab }) => (
  <nav className={styles.navigation}>
    <ul>
      <li>
        <button
          className={`${styles.button} ${
            currentTab === 'generate-dinner' ? styles.active : ''
          }`}
          onClick={() => setCurrentTab('generate-dinner')}
        >
          <Icon color="#DEDEDE" icon={['fas', 'sync-alt']} />
          <span>Generate Dinner</span>
        </button>
      </li>
      <li>
        <button
          className={`${styles.button} ${
            currentTab === 'generate-schedule' ? styles.active : ''
          }`}
          onClick={() => setCurrentTab('generate-schedule')}
        >
          <span>Generate Schedule</span>
        </button>
      </li>
    </ul>
  </nav>
)

export default Navigation
