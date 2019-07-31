import React from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'
import Button from 'components/atoms/Button'

import styles from './Home.module.scss'

const Home = () => (
  <Page data-testid="home-screen">
    <div className={styles.wrapper}>
      <Main>
        <header className={styles.header}>
          <h1 className={styles.h1}>Dinner Generator</h1>
        </header>
        <div className={styles.body}>
          <Button shadow={true}>Generate Dinners</Button>
          <Button shadow={true}>Create Dinner</Button>
          <Button shadow={true}>What can I make with...?</Button>
        </div>
      </Main>
    </div>
  </Page>
)

export default Home
