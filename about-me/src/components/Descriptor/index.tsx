import * as React from 'react'
import * as styles from './styles.module.scss'

interface DescriptorProps {
  descriptorText: Phrase[]
}

// pup parent
// [ { text: pup, link: instagram/stanley }, { text: parent, link: null }]

interface Phrase {
  text: string
  link: string | null
}

class Descriptor extends React.PureComponent<DescriptorProps> {
  public render(): JSX.Element {
    const { descriptorText } = this.props
    return (
      <div className={styles.descriptor}>
        <div className={styles.openBracket}>{'{'}</div>
        {descriptorText.map(
          ({ text, link }, index): JSX.Element => {
            return link ? (
              <a
                href={link}
                key={index}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
              </a>
            ) : (
              <div className={styles.descriptorText}>{text}</div>
            )
          },
        )}
        <div className={styles.closeBracket}>{'}'}</div>
      </div>
    )
  }
}

export default Descriptor
