import React from 'react'

import Page from 'components/templates/Page'
import Main from 'components/templates/Main'

import Title from 'components/atoms/Title'
import Line from 'components/atoms/Line'
import Button from 'components/atoms/Button'

import styles from './CreateDinner.module.scss'

const CreateDinner = () => {
  return (
    <Page>
      <Main>
        <Title title="Create dinner" />
        <Line />
        <div className={styles.nameAndPortions}>
          <label>
            Dinner name
            <input name="name" type="text" />
          </label>
          <label>
            Portions
            <input min="1" name="portions" type="number" />
          </label>
        </div>
        <div>
          <Button>Add Picture</Button>
        </div>
        <div>
          <label htmlFor="ingredientName">Add ingredients</label>
          <div>
            <input
              id="ingredientName"
              name="ingredient-name"
              placeholder="Pasta/meat..."
              type="text"
            />
            <input
              name="ingredient-measure"
              placeholder="X dl/g..."
              type="text"
            />
          </div>
          <button>Add ingredient</button>
        </div>
      </Main>
    </Page>
  )
}

export default CreateDinner
