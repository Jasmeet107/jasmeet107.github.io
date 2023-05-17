import * as React from "react";
import * as styles from "./styles.module.scss";
import SubtitleLine from "../subtitle_line/index";

class About extends React.PureComponent<Props> {
  public render(): JSX.Element {
    const firstLine = [
      [
        {
          text: "she/her ",
          link: null,
          linkStyle: null,
        },
      ],
      [
        {
          text: "software engineer ",
          link: "https://www.youtube.com/watch?v=J-qHcIapgfY",
          linkStyle: "purple",
        },
        {
          text: "at ",
          link: null,
          linkStyle: null,
        },
        {
          text: "notarize ",
          link: "https://go.notarize.com/eng/author/jasmeet-arora",
          linkStyle: "green",
        },
      ],
    ];

    const secondLine = [
      [
        {
          text: "amateur ",
          link: null,
          linkStyle: null,
        },
        {
          text: "photographer ",
          link: "https://photography.jasme.et",
          linkStyle: "yellow",
        },
      ],
      [
        {
          text: "pup ",
          link: "https://www.instagram.com/mr.stanley.k",
          linkStyle: "pink",
        },
        {
          text: "parent ",
          link: null,
          linkStyle: null,
        },
      ],
    ];
    return (
      <div className={styles.About}>
        <SubtitleLine linkTextMaps={firstLine} />
        <SubtitleLine linkTextMaps={secondLine} />
      </div>
    );
  }
}

export default About;
