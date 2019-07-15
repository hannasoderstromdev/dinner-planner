import React from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import styles from './Home.module.scss'

const Home = () => (
  <Page data-testid="library-screen">
    <Main>
      <header>
        <h1 className={styles.h1}>Home</h1>
      </header>
    </Main>
  </Page>
)

export default Home
