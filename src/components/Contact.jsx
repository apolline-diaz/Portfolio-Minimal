import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gzakfou", "template_x59musc", form.current, {
        publicKey: "ueYdXHNISUtJz0Fco",
      })
      .then(
        () => {
          setMessageSent(true);
          console.log("Message envoyé!");
        },
        (error) => {
          console.log("Echec...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center container m-auto px-5">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-start flex-col sm:w-full md:w-[75%] text-lg"
      >
        <label>Nom</label>
        <input type="text" name="user_name" className="border b-black" />
        <label>Email</label>
        <input type="email" name="user_email" className="border b-black" />
        <label>Message</label>
        <textarea name="message" className="border b-black h-[80px]" />
        <input
          type="submit"
          value="Envoyer"
          className="border p-2 my-2 text-white bg-black hover:bg-gray-700 hover:cursor-pointer"
        />
      </form>
      {messageSent && <p>Message envoyé!</p>}
    </div>
  );
}

export default Contact;

export const ContactUs = () => {};
