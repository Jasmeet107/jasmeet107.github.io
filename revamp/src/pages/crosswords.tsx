import * as React from "react";
import CrosswordFullPage from "../components/crossword_full_page";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";
import favicon from "../images/sass.ico";

const CrosswordsPage = () => {
  return (
    <>
      <div className={styles.container}>
        <StaticImage
          layout="fullWidth"
          className={styles.backgroundImageCrosswords}
          src="../images/background.jpg"
          alt=""
          transformOptions={{ fit: "outside" }}
        />
        <CrosswordFullPage></CrosswordFullPage>
      </div>
    </>
  );
};

export const Head = () => {
  return (
    <>
      <title>crosswords</title>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </>
  );
};

export default CrosswordsPage;
