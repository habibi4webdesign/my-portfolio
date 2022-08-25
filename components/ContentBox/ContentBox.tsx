import React from "react";
import styles from "./ContentBox.module.scss";

interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox = (props: ContentBoxProps) => {
  const { children } = props;
  return <div className={styles.contentBoxWrapper}>{children}</div>;
};

export default ContentBox;
