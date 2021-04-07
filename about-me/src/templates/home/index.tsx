import * as React from 'react'
import * as styles from './styles.module.scss'
import { Helmet } from 'react-helmet'

import Subtitle from 'components/Subtitle'
import Title from 'components/Title'

import { graphql } from 'gatsby'

interface HomePageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

class HomePage extends React.Component<HomePageProps> {
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
