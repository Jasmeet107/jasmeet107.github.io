import * as React from 'react'
import * as styles from './styles.module.scss'
import Contact from 'components/Contact'

import { Helmet } from 'react-helmet'

import Title from 'components/Title'

class ContactPage extends React.Component {
  public render(): JSX.Element {
    return (
      <div className={styles.wrapper}>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Title />
        <Contact />
      </div>
    )
  }
}

export default ContactPage
