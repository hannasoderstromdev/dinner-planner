import React from 'react'

import styles from './DinnerThumbnail.module.scss'

const images = require.context('../../../images', true)

const DinnerThumbnail = ({ imgFileName, name }) => {
  const image = images(`./${imgFileName}`)
  const style = { backgroundImage: `url(${image})` }
  return (
    <div className={styles.thumbnail} style={style}>
      <h2>{name}</h2>
    </div>
  )
}

export default DinnerThumbnail
