import * as React from "react";
import * as styles from "./styles.module.scss";
import "@fontsource/sacramento";
import "@fontsource/poppins";
import "@fontsource/commissioner/300.css";
import Contact from "../contact";
import Haha from "../haha";
import SubtitleLine from "../subtitle_line/index";

class FullPage extends React.PureComponent {
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
          link: "https://www.instagram.com/jasmeet107",
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
      <div className={styles.FullPage}>
        <div className={styles.container}>
          <div className={styles.title}>jasmeet arora</div>
          <div className={styles.about}>
            <SubtitleLine linkTextMaps={firstLine} />
            <SubtitleLine linkTextMaps={secondLine} />
          </div>
          <div className={styles.Contact}>
            <Contact />
          </div>
          <div className={styles.Haha}>
            <Haha />
          </div>
        </div>
      </div>
    );
  }
}

export default FullPage;
