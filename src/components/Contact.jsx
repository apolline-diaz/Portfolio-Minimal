import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row container m-auto px-5 pt-8"
    >
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/eapdjvea"
          method="POST"
          className="flex flex-col w-full"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="100"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-full text-white bg-black hover:bg-opacity-50"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
