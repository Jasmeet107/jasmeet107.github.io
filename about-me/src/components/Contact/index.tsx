/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import '@fontsource/catamaran'
import * as React from 'react'
import * as styles from './styles.module.scss'
import Descriptor from '../Descriptor'

class Contact extends React.PureComponent {
  email = [{ text: 'email', link: 'mailto:jasmeet357@gmail.com' }]
  linkedIn = [
    { text: 'linkedin', link: 'https://www.linkedin.com/in/arorajasmeet/' },
  ]
  github = [{ text: 'github', link: 'https://www.github.com/jasmeet107' }]
  instagram = [
    { text: 'instagram', link: 'http://www.instagram.com/jasmeet107' },
  ]
  about = [{ text: 'about', link: '/' }]

  public render(): JSX.Element {
    return (
      <div className={styles.subtitleText}>
        <Descriptor descriptorText={this.email}></Descriptor>
        <Descriptor descriptorText={this.linkedIn}></Descriptor>
        <Descriptor descriptorText={this.github}></Descriptor>
        <Descriptor descriptorText={this.instagram}></Descriptor>
        <Descriptor descriptorText={this.about}></Descriptor>
      </div>
    )
  }
}

export default Contact
