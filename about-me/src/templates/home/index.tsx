import * as React from 'react'
import * as styles from './styles.module.scss'
import { Helmet } from 'react-helmet'

import Subtitle from 'components/Subtitle'
import Title from 'components/Title'
class HomePage extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Title />
        <Subtitle />
      </div>
    )
  }
}

export default HomePage