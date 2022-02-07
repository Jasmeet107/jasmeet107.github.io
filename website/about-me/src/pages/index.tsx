import * as React from "react";
import * as styles from "./styles.module.scss";
import FullPage from "../components/full_page";
import { Helmet } from "react-helmet";

class Index extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <>
        <Helmet>
          <title>jasmeet</title>
          <meta name="jasmeet" />
          <link
            rel="icon"
            type="image/png"
            href="./images/sass.png"
            sizes="16x16"
          />
        </Helmet>
        <div className={styles.Index}>
          <FullPage />
        </div>
      </>
    );
  }
}

export default Index;
