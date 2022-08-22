import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./HeroStyle.module.scss";
import myPic from "public/assets/images/large/my-pic-avatar.jpeg";
import myLogo from "public/assets/images/large/logo.png";

const HeroStyle = () => {
  const [toggleAnimationClass, settoggleAnimationClass] = useState(
    "animate__animated animate__backInLeft"
  );
  const [animatedText, setanimatedText] = useState(
    "Hi, Welcome To My Personal Website"
  );

  useEffect(() => {
    const animationTimeout1 = setTimeout(() => {
      settoggleAnimationClass("animate__animated animate__backOutLeft");
    }, 5000);
    const animationTimeout2 = setTimeout(() => {
      settoggleAnimationClass("animate__animated animate__backInRight");
      setanimatedText("I'm a software engineer and front-end specialist");
    }, 6000);
  }, []);

  return (
    <div className={styles.heroStyleWrapper}>
      <div className={styles.background}>
        <video autoPlay loop muted>
          <source type="video/mp4" src="assets/videos/water.mp4" />
          <source type="video/webm" src="assets/videos/water.webm" />
        </video>
      </div>
      <section className={styles.content}>
        <div className={styles.heroTopPart}>
          <div className={styles.nameAndPic}>
            <div className="animate__animated animate__bounce">
              <Image
                
                src={myPic}
                alt="Yashar Habibi Picture"
                width={190}
                height={185}
              />
            </div>
            <div className={styles.myName}>Yashar Habibi</div>
          </div>
          <div className={styles.logo}>
            <Image src={myLogo} alt="Yashar Habibi Picture" />
          </div>
        </div>
        <div className={clsx(styles.animatedTexts)}>
          <span className={toggleAnimationClass}>{animatedText}</span>
        </div>
      </section>
    </div>
  );
};

export default HeroStyle;
