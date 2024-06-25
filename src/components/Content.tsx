import { FunctionComponent } from "react";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.description}>
        <h1 className={styles.about}>About</h1>
        <h3 className={styles.subheadingForDescription}>
          Subheading for description or instructions
        </h3>
        <div className={styles.paragraph}>
          <p className={styles.bodyTextFor}>
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.excepteurEfficientEmerging}>
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
      </div>
      <img
        className={styles.heroImageIcon}
        loading="lazy"
        alt=""
        src="/hero-image@2x.png"
      />
    </section>
  );
};

export default Content;
