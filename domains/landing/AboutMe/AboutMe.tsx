/* eslint-disable react/no-unescaped-entities */
import ContentBox from "components/ContentBox";
import TitleBox from "components/TitleBox";
import React from "react";
import styles from "./AboutMe.module.scss";
const Fade = require("react-reveal/Fade");

const thisYear = new Date().getFullYear();
const startedYear = new Date("2012-01-01").getFullYear();
const workingYears = Math.abs(thisYear - startedYear);

const AboutMe = () => {
  return (
    <div id="About" className={styles.aboutMeWrapper}>
      <ContentBox>
        <Fade right duration={1500}>
          <TitleBox>
            <h2>ABOUT ME</h2>
          </TitleBox>
        </Fade>
        <Fade duration={2300}>
          <p>
            I'm Yashar Habibi a software engineer and front-end specialist, I
            was born in India and grown up in Iran.
          </p>
          <p>
            I am a self-taught developer that first learnt Pascal at the age of
            nineteen. As an ever growing hobby . After completing my degree I've
            worked as a freelancer web designer and developer, I've even
            developed some android app with Java, but these last {workingYears}{" "}
            years I've been working as a fultime front-end developer. Besides
            coding, I enjoy reading novels, oil painting, digital painting, as
            well as computer games and all kind of puzzle and board games.
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
