import ContentBox from "components/ContentBox";
import TitleBox from "components/TitleBox";
import React from "react";
import styles from "./MySkill.module.scss";
const Fade = require("react-reveal/Fade");
import SkillBar from "react-skillbars";
const skills = [
  { type: "Javascript", level: 90 },
  { type: "React", level: 90 },
  { type: "Redux", level: 70 },
  { type: "Angular", level: 50 },
  { type: "Nextjs", level: 80 },
  { type: "Css/Sass", level: 90 },
  { type: "Html", level: 90 },
  { type: "Typescript", level: 75 },
  { type: "Material UI", level: 75 },
  { type: "Unit Test", level: 70 },
  { type: "Cypress", level: 50 },
  { type: "Graphql", level: 70 },
  { type: "WebSocket", level: 70 },
  { type: "Webpack", level: 70 },
  { type: "Docker", level: 70 },
  { type: "Git", level: 75 },
  { type: "PWA", level: 75 },
  { type: "Nodejs", level: 50 },
  { type: "Java", level: 40 },
  { type: "C#", level: 40 },
  { type: "Photoshop", level: 60 },
  { type: "Illustrator", level: 40 },
  { type: "AfterEfects", level: 40 },
];
const colors = {
  bar: "#ff9900",
  title: {
    text: "#fff",
    background: "#164670",
  },
};
const MySkills = () => {
  return (
    <div id="Skills" className={styles.skillsWrapper}>
      <ContentBox>
        <Fade right duration={1500}>
          <TitleBox>
            <h2>My Skills</h2>
          </TitleBox>
        </Fade>
        <div className={styles.skillsContentWrapper}>
          <div>
            <Fade duration={2000}>
              <p>
                I have a lot of interest in art and creation. Since creating and
                learning is one of my greatest interests, when I'm not coding
                and moving pixels, I am probably either painting or studying.
              </p>
            </Fade>

            <Fade up duration={2000}>
              <div className={styles.myIntroVideoWrapper}>
                <video autoPlay loop muted>
                  <source type="video/mp4" src="/assets/videos/myIntro.mp4" />
                </video>
              </div>
            </Fade>
          </div>
          <div>
            <SkillBar
              animationThreshold={0.2}
              animationDelay={0}
              colors={colors}
              skills={skills}
              height={30}
            />
          </div>
        </div>
      </ContentBox>
    </div>
  );
};

export default MySkills;
