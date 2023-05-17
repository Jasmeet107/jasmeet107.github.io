import * as React from "react";
import FullPage from "../components/full_page/index";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./styles.module.scss";

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

export const Head = () => <title>Home Page</title>;

export default IndexPage;
