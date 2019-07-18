import React from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'
import Title from 'components/atoms/Title'
import DinnerThumbnail from 'components/atoms/DinnerThumbnail'
import Ingredients from 'components/atoms/Ingredients'
import Navigation from 'components/molecules/Navigation'

// import styles from './GenerateDinners.module.scss'
const ingredients = [
  'Spaghetti, 1 normal cock-size',
  'Grinded meat, 500g thats grams fuckhead',
  'Mushroom, 2 cans',
  'Cocktail tomatoes, 1/2 package',
  'Cucumber, 1/3',
]

const GenerateDinners = () => (
  <Page data-testid="generatedinners-screen">
    <Main>
      <Title title="Generate Dinners" />
      <Navigation currentTab="generate-dinner" />
      <div>
        <DinnerThumbnail
          imgFileName={'spaghetti.jpg'}
          name="Spaghetti and brain-sauce"
        />
        <Ingredients ingredients={ingredients} />
      </div>
    </Main>
  </Page>
)

export default GenerateDinners
