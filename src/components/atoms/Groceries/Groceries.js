import React from 'react'

import Grocery from 'components/atoms/Grocery'

import styles from './Groceries.module.scss'

const Groceries = ({ groceries }) => (
  <div className={styles.wrapper}>
    <h3 className={styles.h3}>Groceries</h3>
    <ul className={styles.list}>
      {groceries.map((grocery, index) => (
        <Grocery grocery={grocery} key={index} />
      ))}
    </ul>
  </div>
)

export default Groceries
