import ContentBox from "components/ContentBox";
import TitleBox from "components/TitleBox";
import React from "react";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";
const Fade = require("react-reveal/Fade");

const Contact = () => {
  return (
    <div id="Contact" className={styles.contactWrapper}>
      <ContentBox>
        <Fade duration={1500}>
          <h2>CONTACT</h2>
        </Fade>
        <p>Do you have any question ? Please Send That!!</p>

        <Fade up duration={1500}>
          <ContactForm />
        </Fade>
      </ContentBox>
    </div>
  );
};

export default Contact;
