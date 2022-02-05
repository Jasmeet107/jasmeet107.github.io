import * as React from 'react'
import * as styles from './styles.module.scss'
import { Helmet } from 'react-helmet'
class HomePage extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>jasmeet arora</title>
        </Helmet>
      </div>
    )
  }
}

export default HomePage
