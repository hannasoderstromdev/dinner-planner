import React from 'react'

import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import styles from './Search.module.scss'

const Search = () => {
  return (
    <section className={styles.wrapper}>
      <label className={styles.label} htmlFor="search">
        Search by ingredients
      </label>
      <div className={styles.searchWrapper}>
        <input className={styles.search} id="search" type="text" />
        <Button className={styles.searchButton}>
          <Icon
            className={styles.searchIcon}
            color="#C4C4C4"
            icon={['fas', 'search']}
          />
        </Button>
      </div>
    </section>
  )
}

export default Search
