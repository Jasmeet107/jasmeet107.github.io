import * as React from "react";
import * as styles from "./styles.module.scss";
import "@fontsource/sacramento";
import "@fontsource/commissioner/300.css";
import "@fontsource/lobster-two";

import "@fontsource/sacramento";
import "@fontsource/commissioner";
import Crosswords from "../crosswords";

const CrosswordFullPage = () => {
  return (
    <>
      <div className={styles.FullPage}>
        <div className={styles.Description}>
          <div className={styles.CrosswordContainer}></div>
        </div>
      </div>
    </>
  );
};

export default CrosswordFullPage;
