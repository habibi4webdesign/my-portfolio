import React from "react";
import styles from "./TitleBox.module.scss";

interface TitleBoxProps {
  children: React.ReactNode;
}

const TitleBox: React.FC<TitleBoxProps> = (props) => {
  const { children } = props;

  return <div className={styles.titleBoxWrapper}>{children}</div>;
};

TitleBox.displayName = "TitleBox";

export default TitleBox;
