import * as React from "react";
import * as styles from "./styles.module.scss";
import "@fontsource/sacramento";
import "@fontsource/poppins";
import "@fontsource/commissioner/300.css";
import Contact from "../contact";
import Title from "../title";
import About from "../about";
import Haha from "../haha";
import SubtitleLine from "../subtitle_line/index";

import "@fontsource/sacramento";
import "@fontsource/commissioner";

const FullPage = () => {
  return (
    <>
      <div className={styles.FullPage}>
        <div className={styles.Description}>
          <Title></Title>
          <About></About>
          <div className={styles.Contact}>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPage;
