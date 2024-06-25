import { FunctionComponent } from "react";
import Main from "../components/Main";
import Content from "../components/Content";
import Footer from "../components/Footer";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <div className={styles.about}>
      <Main />
      <Content />
      <Footer />
    </div>
  );
};

export default About;
