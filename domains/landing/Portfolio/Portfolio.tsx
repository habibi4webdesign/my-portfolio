import ContentBox from "components/ContentBox";
import TitleBox from "components/TitleBox";
import React from "react";
import styles from "./Portfolio.module.scss";
const Fade = require("react-reveal/Fade");

const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.portfolioWrapper}>
      <ContentBox>
        <Fade right duration={1500}>
          <TitleBox>
            <h2>Portfolio</h2>
          </TitleBox>
        </Fade>
      </ContentBox>
    </div>
  );
};

export default Portfolio;
