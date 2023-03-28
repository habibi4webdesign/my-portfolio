import ContentBox from "components/ContentBox";
import TitleBox from "components/TitleBox";
import React, { useState } from "react";
import styles from "./AtAGlance.module.scss";
const Fade = require("react-reveal/Fade");

export interface AtAGlanceProps {}

const TitleAndValue = (props: { title: string; value: string }) => {
  const { title, value } = props;

  return (
    <>
      <h4 className={styles.title}>{title.toUpperCase()}</h4>
      <h5 className={styles.value}>{value}</h5>
    </>
  );
};

const AtAGlance = (props: AtAGlanceProps) => {
  const [isVisible, setisVisible] = useState(false);
  return (
    <div id="AtAGlance" className={styles.atAGlanceWrapper}>
      <ContentBox>
        <h3>At A Glance</h3>
        <div className={styles.titlesWrapper}>
          <Fade
            bottom
            duration={1500}
            onReveal={() => setTimeout(() => setisVisible(true), 500)}
          >
            <TitleBox>
              <TitleAndValue title="full name" value="Yashar Habibi" />
            </TitleBox>
            <TitleBox>
              <TitleAndValue title="BIRTHPLACE" value="Tehran, Iran" />
            </TitleBox>
            <TitleBox>
              <TitleAndValue title="BORN" value="1982" />
            </TitleBox>
          </Fade>
        </div>
        <div className={styles.titlesWrapper}>
          <Fade bottom duration={1500} when={isVisible}>
            <TitleBox>
              <TitleAndValue title="RESIDENCE" value="Stockholm" />
            </TitleBox>
            <TitleBox>
              <TitleAndValue title="EDUCATION" value="Computer Software" />
            </TitleBox>
            <TitleBox>
              <TitleAndValue
                title="HOBBIES"
                value="Coding, Learning, Playing PC Games, Painting"
              />
            </TitleBox>
          </Fade>
        </div>
      </ContentBox>
    </div>
  );
};

export default AtAGlance;
