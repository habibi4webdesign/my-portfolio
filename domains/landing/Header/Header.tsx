import clsx from "clsx";
import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const menuClickHandler = () => {
    setisMenuOpen((pre) => !pre);
  };

  const onMenuItemSelect = () => {
    setisMenuOpen(false);
  };

  return (
    <header className={styles.headerRoot}>
      <div className={styles.headerWrapper}>
        <div className={styles.menu} id="menu">
          <div
            className={clsx(styles.nav, isMenuOpen && styles.menuIsActive)}
            id="nav"
          >
            <ul>
              <li>
                <a onClick={onMenuItemSelect} href="#AtAGlance">
                  At A Glance
                </a>
              </li>
              <li>
                <a onClick={onMenuItemSelect} href="#About">
                  About Me
                </a>
              </li>
              <li>
                <a onClick={onMenuItemSelect} href="#Skills">
                  Skills
                </a>
              </li>
              {/* <li>
                <a onClick={onMenuItemSelect} href="#Portfolio">
                  Portfolio
                </a>
              </li> */}
              <li>
                <a onClick={onMenuItemSelect} href="#Contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          <div onClick={menuClickHandler} className={styles.menuButton}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
