import * as React from "react";
import * as styles from "./styles.module.scss";
import SubtitlePhrase from "../subtitle_phrase/index";

type Props = {
  linkTextMaps: Array<Array<TextLink>>;
};

type TextLink = {
  text: string;
  link: string;
  linkStyle: string;
};

class SubtitleLine extends React.PureComponent<Props> {
  public render(): JSX.Element {
    return (
      <div className={styles.SubtitleLine}>
        {this.props.linkTextMaps.map((linkTextMap: Array<TextLink>, index) => {
          if (index == 0) {
            return (
              <div>
                <SubtitlePhrase linkTextMap={linkTextMap} />
              </div>
            );
          } else if (index == this.props.linkTextMaps.length - 1) {
            return (
              <div className={styles.phraseContainer}>
                <div className={styles.spacer}>&#9675; </div>
                <SubtitlePhrase linkTextMap={linkTextMap} />
              </div>
            );
          } else {
            return (
              <div className={styles.phraseContainer}>
                <div className={styles.spacer}>&#9675;</div>
                <SubtitlePhrase linkTextMap={linkTextMap} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default SubtitleLine;
