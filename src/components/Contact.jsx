import React from "react";
import Title from "./Title.jsx";

export default function Contact() {
  return (
    <div className="flex flex-col md-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/021f9429-fdde-4b84-b7da-fa22fcc7f04a"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title id="contact">Contact</Title>
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
            className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}
