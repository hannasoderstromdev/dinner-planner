import React from 'react'
import { Link } from 'react-router-dom'

import styles from './dinners.module.scss'

const images = require.context('../../../images', true)

const Dinners = ({ dinnerList }) => {
  return (
    <section>
      <ul className={styles.list}>
        {dinnerList.map(dinner => {
          const image = images(`./${dinner.imageUrl}`)
          return (
            <li className={styles.dinner} key={dinner.id}>
              <img alt={dinner.name} className={styles.image} src={image} />
              <Link to={dinner.link}>{dinner.name}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Dinners
