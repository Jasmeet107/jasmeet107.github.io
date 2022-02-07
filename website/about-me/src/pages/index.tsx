import * as React from "react";
import * as styles from "./styles.module.scss";
import FullPage from "../components/full_page";
import { Helmet } from "react-helmet";

class Index extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <>
        <Helmet>
          <meta name="icon" href="/src/assets/images/sass.png" />
        </Helmet>
        <div className={styles.Index}>
          <FullPage />
        </div>
      </>
    );
  }
}

export default Index;
