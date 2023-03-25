import React, { useState, FormEvent } from "react";
import { Button } from "react-ui-kit-yas";
import styles from "./ContactForm.module.scss";
import { send } from "emailjs-com";

type FormValues = {
  name: string;
  message: string;
  reply_to: string;
};

const ContactForm: React.FC<{}> = () => {
  const [toSend, setToSend] = useState<FormValues>({
    name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    e.preventDefault();
    {
      send(serviceId, templateId, toSend, userId)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setToSend({
            name: "",
            message: "",
            reply_to: "",
          });
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  const handleChange = (e: React.ChangeEvent) => {
    setToSend({
      ...toSend,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };
  return (
    <div className={styles.contactFormWrapper}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={toSend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />

        <Button color="#222" variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
