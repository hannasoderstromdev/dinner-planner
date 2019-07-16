import React from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'
import Title from 'components/atoms/Title'
import Navigation from 'components/atoms/Navigation'

// import styles from './GenerateDinners.module.scss'

const GenerateDinners = () => (
  <Page data-testid="generatedinners-screen">
    <Main>
      <Title title="Generate Dinners" />
      <Navigation />
      <div>
        <header>
          <h2>Spaghetti and meat-sauce</h2>
        </header>
        <div>
          <h3>Ingredients</h3>
          <ul>
            <li>Spaghetti, 1 normal cock-size</li>
            <li>Grinded meat, 500g thats grams fuckhead</li>
            <li>Mushroom, 2 cans</li>
            <li>Cocktail tomatoes, 1/2 package</li>
            <li>Cucumber, 1/3</li>
          </ul>
        </div>
      </div>
    </Main>
  </Page>
)

export default GenerateDinners
