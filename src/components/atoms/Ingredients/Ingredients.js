import React from 'react'

import styles from './Ingredients.module.scss'

const Ingredients = ({ ingredients }) => (
  <div className={styles.wrapper}>
    <h3 className={styles.h3}>Ingredients</h3>
    <ul className={styles.list}>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
)

export default Ingredients
