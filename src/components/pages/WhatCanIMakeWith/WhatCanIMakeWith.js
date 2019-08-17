import React from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import Title from 'components/atoms/Title'
import Line from 'components/atoms/Line'
import Dinners from 'components/atoms/Dinners'

import Search from 'components/molecules/Search'

import styles from './WhatCanIMakeWith.module.scss'

const dinnerList = [
  {
    id: 'dinnerId01',
    name: 'Macaronies n bacon',
    link: 'macaronies-n-bacon',
    imageUrl: 'macaronies-n-bacon.jpg',
    ingredients: [
      'Spaghetti, 1 normal cock-size',
      'Grinded meat, 500g thats grams fuckhead',
      'Mushroom, 2 cans',
      'Cocktail tomatoes, 1/2 package',
      'Cucumber, 1/3',
    ],
  },
  {
    id: 'dinnerId02',
    name: 'Macaronies n meatballs',
    link: 'macaronies-n-meatballs',
    imageUrl: 'macaronies-n-meatballs.jpg',
    ingredients: ['Macaronies, 2.5 dl', 'Meatballs, 16 pieces'],
  },
]

const WhatCanIMakeWith = () => {
  return (
    <Page>
      <Main>
        <Title title="What can I make with...?" />
        <Line />
        <div className={styles.center}>
          <Search />
          <div className={styles.foundText}>
            <em>- Found X dinners -</em>
          </div>
          <Dinners dinnerList={dinnerList} />
        </div>
      </Main>
    </Page>
  )
}

export default WhatCanIMakeWith
