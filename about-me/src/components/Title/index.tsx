import '@fontsource/catamaran'
import * as React from 'react'
import * as styles from './styles.module.scss'

class Title extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <div className={styles.text}>jasmeet arora</div>
      </div>
    )
  }
}

export default Title
