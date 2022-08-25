import ContentBox from "components/ContentBox";
import TitleBox from "components/TitleBox";
import React from "react";
import styles from "./AboutMe.module.scss";
const Fade = require("react-reveal/Fade");

const AboutMe = () => {
  return (
    <div className={styles.aboutMeWrapper}>
      <ContentBox>
        <Fade right duration={1500}>
          <TitleBox>
            <h2>ABOUT ME</h2>
          </TitleBox>
        </Fade>
        <Fade duration={2300}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            atque aperiam delectus maiores vitae molestias rem nobis, quis at
            quod, officia eligendi cumque, fuga similique eum sequi debitis
            dignissimos aspernatur?
          </p>
        </Fade>
        <Fade left duration={1500}>
          <blockquote>
            <p>
              I wish to expand my skills on a daily basis with the help of an
              employee-focused company.
            </p>
          </blockquote>
        </Fade>
      </ContentBox>
    </div>
  );
};

export default AboutMe;
