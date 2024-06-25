import { FunctionComponent } from "react";
import styles from "./Main.module.css";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <header className={[styles.main, className].join(" ")}>
      <div className={styles.siteNameWrapper}>
        <div className={styles.siteName}>Site name</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.pageWrapper}>
          <div className={styles.page}>Page</div>
        </div>
        <div className={styles.pageContainer}>
          <div className={styles.page1}>Page</div>
        </div>
        <div className={styles.pageFrame}>
          <div className={styles.page2}>Page</div>
        </div>
        <button className={styles.button}>
          <div className={styles.button1}>Button</div>
        </button>
      </div>
    </header>
  );
};

export default Main;
