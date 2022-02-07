import * as React from "react";
import * as styles from "./styles.module.scss";

type Props = {
  linkTextMap: Array<TextLink>;
};

type TextLink = {
  text: string;
  link: string;
  linkStyle: string;
};

class SubtitlePhrase extends React.PureComponent<Props> {
  public render(): JSX.Element {
    return (
      <div className={styles.SubtitlePhrase}>
        {this.props.linkTextMap.map((phraseLink: TextLink) => {
          if (phraseLink.link == null) {
            return <div className={styles.word}>{phraseLink.text}</div>;
          } else {
            return (
              <div className={styles.word}>
                <div className={styles[phraseLink["linkStyle"]]}>
                  <a href={phraseLink.link}>{phraseLink.text}</a>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SubtitlePhrase;
