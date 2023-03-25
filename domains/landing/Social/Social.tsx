import clsx from "clsx";
import { useEffect, useRef } from "react";
import styles from "./Social.module.scss";

const Social = () => {
  const socialBarRef = useRef<HTMLElement>(null);

  const toggleSocialBarOnScroll = () => {
    window.onscroll = () => {
      if (window.innerHeight / 2 <= window.scrollY) {
        socialBarRef.current?.classList.add(styles.visible);
      } else {
        socialBarRef.current?.classList.remove(styles.visible);
      }
    };
  };

  useEffect(() => {
    toggleSocialBarOnScroll();
  }, []);

  const openSocialMenuHandler = () => {
    socialBarRef.current?.classList.toggle(styles.socilaMenuIsOpen);
  };

  return (
    <section ref={socialBarRef} className={clsx(styles.socialRoot)}>
      <div className={clsx(styles.socialLeft, styles.socialSide)}>
        <a href="https://www.instagram.com/yasharhabibimedia/">
          <i className="icon-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/yasharhabibi/">
          <i className="icon-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/yasharhabibimedia">
          <i className="icon-facebook"></i>
        </a>
        <a href="https://twitter.com/yasharhabibimedia">
          <i className="icon-twitter"></i>
        </a>
      </div>
      <div
        onClick={openSocialMenuHandler}
        className={styles.socialButton}
      ></div>
      <div className={clsx(styles.socialRight, styles.socialSide)}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://plus.google.com/share?url=http://"
        >
          <i className="icon-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://pinterest.com/pin/create/button/?url=http://"
        >
          <i className="icon-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.facebook.com/share.php?u=http://"
        >
          <i className="icon-facebook"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://twitter.com/home?status=http://"
        >
          <i className="icon-twitter"></i>
        </a>
      </div>
    </section>
  );
};

export default Social;
