import * as React from "react";
import * as styles from "./styles.module.scss";

class Crosswords extends React.PureComponent<Props> {
  public render(): JSX.Element {
    return (
      <>
        <div className={styles.CrosswordList}>
          <div className={styles.crosswordItem}>
            <a
              className={styles.crosswordLink}
              href="https://crosswords.jasme.et/"
              target="_blank"
            >
              click here
            </a>{" "}
            to solve my self-published xwords
          </div>
          <div>~</div>
          <div className={styles.crosswordItem}>bylines:</div>
          <div className={styles.crosswordItem}>
            2024.04.05 - USA Today - First Class by Jasmeet Arora |{" "}
            <a
              className={styles.crosswordLink}
              href="https://www.usatoday.com/story/entertainment/puzzles/crosswords/sally-hoelscher/2024/04/05/daily-crossword-analysis/73157194007/"
              target="_blank"
            >
              solution
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2024.03.19 - Lil AVC X - Inner Peace by Jasmeet Arora |{" "}
            <a
              className={styles.crosswordLink}
              href="https://avxwords.com/puzzles/1536/"
              target="_blank"
            >
              puzzle
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2024.03.19 - Apple News+ - Freestyle by Jasmeet Arora
          </div>
          <div className={styles.crosswordItem}>
            2024.03.11 - Apple News+ - Metamorphosis by Jasmeet Arora
          </div>
          <div className={styles.crosswordItem}>
            2024.03.02 - Crossword Flow - Mini by Jasmeet Arora
          </div>
          <div className={styles.crosswordItem}>
            2023.12.19 - USA Today - Latte Art (Freestyle) by Jasmeet Arora |{" "}
            <a
              className={styles.crosswordLink}
              href="https://usatodayxwordblog.blogspot.com/2023/12/december-19-2023.html"
              target="_blank"
            >
              solution
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2023.12.11 - USA Today - Girls Who Code by Jasmeet Arora & Brooke
            Husic |{" "}
            <a
              className={styles.crosswordLink}
              href="https://usatodayxwordblog.blogspot.com/2023/12/december-11-2023.html"
              target="_blank"
            >
              solution
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2023.11.13 - Universal - Open Up! by Jasmeet Arora
          </div>
          <div className={styles.crosswordItem}>
            2023.11.09 - The Inkubator - Chart Toppers by Jasmeet Arora |{" "}
            <a
              className={styles.crosswordLink}
              href="https://inkubatorcrosswords.com/puzzles/1047/"
              target="_blank"
            >
              puzzle
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2023.10.17 - USA Today - Out of the Closets & Into the Streets
            (Freestyle) by Jasmeet Arora & Brooke Husic |{" "}
            <a
              className={styles.crosswordLink}
              href="https://usatodayxwordblog.blogspot.com/2023/10/october-17-2023.html"
              target="_blank"
            >
              solution
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2023.10.04 - USA Today - Material World by Jasmeet Arora & Brooke
            Husic |{" "}
            <a
              className={styles.crosswordLink}
              href="https://usatodayxwordblog.blogspot.com/2023/10/october-4-2023.html"
              target="_blank"
            >
              solution
            </a>
          </div>
          <div className={styles.crosswordItem}>
            2023.09.18 - USA Today - Showdowns by Jasmeet Arora & Brooke Husic |{" "}
            <a
              className={styles.crosswordLink}
              href="https://usatodayxwordblog.blogspot.com/2023/09/september-18-2023.html"
              target="_blank"
            >
              solution
            </a>
          </div>
          <div className={styles.crosswordItem}>
            <a className={styles.crosswordLink} href="/">
              &#8592; back
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Crosswords;
