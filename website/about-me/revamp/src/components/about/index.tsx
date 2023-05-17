import * as React from "react";
import * as styles from "./styles.module.scss";

class About extends React.PureComponent<Props> {
  public render(): JSX.Element {
    return (
      <>
        <div className={styles.About}>
          <div className={styles.aboutPhrase}>software engineer</div> |
          <div className={styles.aboutPhrase}>photographer</div> |
          <div className={styles.aboutPhrase}>
            amateur crossword constructor
          </div>
        </div>

        <div className={styles.Contact}>
          <div className={styles.contactPhrase}>
            <a href="mailto:hello@jasme.et" target="_blank">
              email
            </a>
          </div>
          -
          <div className={styles.contactPhrase}>
            <a href="https://photography.jasme.et" target="_blank">
              photography
            </a>
          </div>
          -
          <div className={styles.contactPhrase}>
            <a href="http://www.linkedin.com/in/arorajasmeet" target="_blank">
              linkedin
            </a>
          </div>
          -
          <div className={styles.contactPhrase}>
            <a href="https://www.instagram.com/jasmeet107" target="_blank">
              instagram
            </a>
          </div>
          -
          <div className={styles.contactPhrase}>
            <a href="https://medium.com/@jasmeet." target="_blank">
              medium
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default About;
