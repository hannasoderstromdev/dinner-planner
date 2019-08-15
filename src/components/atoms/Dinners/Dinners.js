import React from 'react'

// import styles from './dinners.module.scss'

const images = require.context('../../../images', true)

const Dinners = ({ dinnerList }) => {
  return (
    <section>
      <ul>
        {dinnerList.map(dinner => {
          const image = images(`./${dinner.imageUrl}`)
          return (
            <li key={dinner.id}>
              <img alt={dinner.name} url={image} />
              <a href={dinner.link}>{dinner.name}</a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Dinners
