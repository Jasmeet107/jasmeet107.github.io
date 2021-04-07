/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import '@fontsource/catamaran'
import * as React from 'react'
import * as styles from './styles.module.scss'
import Descriptor from '../Descriptor/descriptor'

class Subtitle extends React.PureComponent {
  pupParent(): JSX.Element {
    return (
      <div>
        <a
          className={styles.link}
          href="https://www.instagram.com/mr.stanley.k"
        >
          pup
        </a>{' '}
        parent
      </div>
    )
  }

  pupParentDescriptorText = [
    { text: 'pup', link: 'https://www.instagram.com/mr.stanley.k' },
    { text: 'parent', link: null },
  ]

  riceKrispie(): JSX.Element {
    return <div>rice krispie treat maker</div>
  }

  softwareEngineerAtNotarize(): JSX.Element {
    return (
      <div>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/arorajasmeet/"
        >
          software engineer
        </a>{' '}
        at{' '}
        <a
          className={styles.link}
          href="https://www.notarize.com/eng/author/jasmeet-arora"
        >
          notarize
        </a>{' '}
        <a
          className={styles.link}
          href="https://www.notarize.com/blog/author/jasmeet-arora"
        >
          passionate
        </a>{' '}
        about{' '}
        <a
          className={styles.link}
          href="https://www.builtinboston.com/company/notarize/diversity-inclusion"
        >
          inclusivity in tech
        </a>{' '}
      </div>
    )
  }

  riceKrispieDescriptorText = [{ text: 'rice krispie treat maker', link: null }]

  softwareEngineerDescriptorText = [
    {
      text: 'software engineer',
      link: 'https://www.linkedin.com/in/arorajasmeet/',
    },
    {
      text: ' at ',
      link: null,
    },
    {
      text: 'notarize',
      link: 'https://www.notarize.com/eng/author/jasmeet-arora',
    },
    {
      text: ' passionate about ',
      link: null,
    },
    {
      text: 'inclusivity',
      link: 'https://www.notarize.com/blog/author/jasmeet-arora',
    },
    {
      text: ' in ',
      link: null,
    },
    {
      text: 'tech',
      link:
        'https://www.builtinboston.com/company/notarize/diversity-inclusion',
    },
  ]

  photographerDescriptorText = [
    {
      text: 'amateur',
      link: 'https://500px.com/p/jasmeet107?view=photos',
    },
    { text: 'photographer', link: 'https://www.instagram.com/jasmeet107/' },
  ]

  photographer(): JSX.Element {
    return (
      <div>
        {' '}
        <a
          className={styles.link}
          href="https://500px.com/p/jasmeet107?view=photos"
        >
          amateur
        </a>{' '}
        <a className={styles.link} href="https://www.instagram.com/jasmeet107/">
          photographer
        </a>{' '}
      </div>
    )
  }

  public render(): JSX.Element {
    return (
      <div className={styles.subtitleText}>
        <Descriptor
          descriptorText={this.softwareEngineerDescriptorText}
        ></Descriptor>
        <Descriptor
          descriptorText={this.riceKrispieDescriptorText}
        ></Descriptor>
        <Descriptor descriptorText={this.pupParentDescriptorText}></Descriptor>

        <Descriptor
          descriptorText={this.photographerDescriptorText}
        ></Descriptor>
      </div>
    )
  }
}

export default Subtitle
