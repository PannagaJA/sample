import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.divider} />
      <div className={styles.footerContent}>
        <div className={styles.siteInfo}>
          <h3 className={styles.siteName}>Site name</h3>
          <div className={styles.buttonsIconParent}>
            <img
              className={styles.buttonsIcon}
              loading="lazy"
              alt=""
              src="/buttons--icon@2x.png"
            />
            <img
              className={styles.buttonsIcon1}
              loading="lazy"
              alt=""
              src="/buttons--icon-1@2x.png"
            />
            <img
              className={styles.buttonsIcon2}
              loading="lazy"
              alt=""
              src="/buttons--icon-2@2x.png"
            />
            <img
              className={styles.buttonsIcon3}
              loading="lazy"
              alt=""
              src="/buttons--icon-3@2x.png"
            />
          </div>
        </div>
        <div className={styles.topicPages}>
          <div className={styles.topicParent}>
            <div className={styles.topic}>Topic</div>
            <div className={styles.page}>Page</div>
            <div className={styles.page1}>Page</div>
            <div className={styles.page2}>Page</div>
          </div>
          <div className={styles.topicGroup}>
            <div className={styles.topic1}>Topic</div>
            <div className={styles.page3}>Page</div>
            <div className={styles.page4}>Page</div>
            <div className={styles.page5}>Page</div>
          </div>
          <div className={styles.topicContainer}>
            <div className={styles.topic2}>Topic</div>
            <div className={styles.page6}>Page</div>
            <div className={styles.page7}>Page</div>
            <div className={styles.page8}>Page</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
