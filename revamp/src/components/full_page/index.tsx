import * as React from "react";
import * as styles from "./styles.module.scss";
import "@fontsource/commissioner/300.css";
import "@fontsource/lobster-two";
import Title from "../title";
import About from "../about";
import "@fontsource/commissioner";

const FullPage = () => {
  return (
    <>
      <div className={styles.FullPage}>
        <div className={styles.Description}>
          <Title></Title>
          <About></About>
        </div>
      </div>
    </>
  );
};

export default FullPage;
