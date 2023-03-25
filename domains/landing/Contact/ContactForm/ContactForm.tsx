import React, { useState, FormEvent } from "react";
import { Button } from "react-ui-kit-yas";
import styles from "./ContactForm.module.scss";
import { send } from "emailjs-com";
import { toast } from "react-toastify";

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
    e.preventDefault();

    if (toSend.name === "" || toSend.message === "" || toSend.reply_to === "") {
      toast.error("Please fill all the fields");
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string;

    {
      send(serviceId, templateId, toSend, userId)
        .then((response) => {
          toast("Your message has been sent!");
          setToSend({
            name: "",
            message: "",
            reply_to: "",
          });
        })
        .catch((err) => {
          toast("Something went wrong! try again later.");
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
