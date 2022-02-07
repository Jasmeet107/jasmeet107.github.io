import * as React from "react";
import * as styles from "./styles.module.scss";
import FullPage from "../components/full_page";
class Index extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div className={styles.Index}>
        <FullPage />
      </div>
    );
  }
}

export default Index;
