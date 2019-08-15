import React, { useState } from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'
import Title from 'components/atoms/Title'
import DinnerThumbnail from 'components/atoms/DinnerThumbnail'
import Ingredients from 'components/atoms/Ingredients'
import WeekdayDinner from 'components/atoms/WeekdayDinner'
import Groceries from 'components/atoms/Groceries'
import Navigation from 'components/molecules/Navigation'

import styles from './GenerateDinners.module.scss'

const groceries = [
  'Spaghetti, 1 normal cock-size',
  'Grinded meat, 500g thats grams fuckhead',
  'Mushroom, 2 cans',
  'Cocktail tomatoes, 1/2 package',
  'Cucumber, 1/3',
]

const singleDinner = {
  id: 'dinnerId01',
  name: 'Spaghetti n meat sauce',
  link: 'spaghetti-n-meat-sauce',
  imageUrl: 'spaghetti.jpg',
  ingredients: [
    'Spaghetti, 1 normal cock-size',
    'Grinded meat, 500g thats grams fuckhead',
    'Mushroom, 2 cans',
    'Cocktail tomatoes, 1/2 package',
    'Cucumber, 1/3',
  ],
}

const weekdaysWithDinners = [
  {
    name: 'Macaronies n bacon',
    link: 'macaronies-n-bacon',
    weekday: 'Monday',
  },
  {
    name: 'Pancakes',
    link: 'pancakes',
    weekday: 'Tuesday',
  },
  {
    name: 'Fish sticks',
    link: 'fish-sticks',
    weekday: 'Wednesday',
  },
  {
    name: 'Heavenly stew',
    link: 'heavenly-stew',
    weekday: 'Thursday',
  },
  {
    name: 'Spaghetti and meat-sauce',
    link: 'spaghetti-and-meat-sauce',
    weekday: 'Friday',
  },
  {
    name: 'Tacos',
    link: 'tacos',
    weekday: 'Saturday',
  },
  {
    name: 'Sausage-stroganoff',
    link: 'sausage-stroganoff',
    weekday: 'Sunday',
  },
]

const GenerateDinners = () => {
  const [currentTab, setCurrentTab] = useState('generate-dinner')
  const [includedWeekdays, setIncludedWeekdays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  })

  const toggleWeekdays = (weekday, value) => {
    setIncludedWeekdays({
      ...includedWeekdays,
      [weekday]: value,
    })
  }

  return (
    <Page data-testid="generatedinners-screen">
      <Main>
        <Title title="Generate Dinners" />
        <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {currentTab === 'generate-dinner' ? (
          <div>
            <DinnerThumbnail
              imgFileName={singleDinner.imageUrl}
              name={singleDinner.name}
            />
            <Ingredients ingredients={singleDinner.ingredients} />
          </div>
        ) : (
          <React.Fragment>
            <div className={styles.dinnerList}>
              {weekdaysWithDinners.map(weekday => (
                <WeekdayDinner
                  checked={includedWeekdays[weekday.weekday.toLowerCase()]}
                  dinner={{
                    name: weekday.name,
                    link: weekday.link,
                  }}
                  key={weekday.weekday}
                  onCheckChange={toggleWeekdays}
                  weekday={weekday.weekday}
                />
              ))}
            </div>
            <div className={styles.groceriesList}>
              <Groceries groceries={groceries} />
            </div>
          </React.Fragment>
        )}
      </Main>
    </Page>
  )
}

export default GenerateDinners
