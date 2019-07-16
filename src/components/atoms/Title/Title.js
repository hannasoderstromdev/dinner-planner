import React from 'react'

import styles from './Title.module.scss'

const Title = ({ title }) => (
  <header className={styles.header}>
    <h1 className={styles.h1}>{title}</h1>
  </header>
)

export default Title
