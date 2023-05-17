import * as React from "react";
import FullPage from "../components/full_page/index";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
import favicon from "../images/sass.ico";

const IndexPage = () => {
  return (
    <>
      <div className={styles.container}>
        <StaticImage
          layout="fullWidth"
          className={styles.backgroundImage}
          src="../images/background.jpg"
          alt=""
          transformOptions={{ fit: "outside" }}
        />
        <FullPage></FullPage>
      </div>
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>jasmeet</title>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </>
  );
};

export default IndexPage;
