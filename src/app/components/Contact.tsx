import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="grid sm:grid-cols-2">
      <div className="flex flex-col justify-center items-start p-8">
        <input
          className="border-black border-2 rounded-md py-2 w-3/4"
          placeholder="Your name"
        ></input>
        <br />
        <input
          className="border-black border-2 rounded-md py-2 w-3/4"
          placeholder="Email"
        ></input>
        <br />
        <input
          className="border-black border-2 rounded-md py-2 w-3/4"
          placeholder="Your Website"
        ></input>
        <br />
        <input
          className="border-black border-2 rounded-md py-2 w-3/4"
          placeholder="How can i Help you?"
        ></input>
        <br />
        <button className="flex flex-row bg-black text-center text-white hover:bg-white hover:text-black p-4 border-black border-2 rounded-lg">
          <p className="text-lg pr-2">Get in touch</p>
        </button>
        <br />
        <div className="flex flex-col items-center justify-center w-10 h-10 p-6 border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
          <Link href="https://linkedin.com/company/faangpath">
            <FaLinkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start p-4">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Let's talk for
          <br />
          Something Special
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <br />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl">
          sshriwatri2@gmail.com
          <br />
          +91-751729350
        </h1>
      </div>
    </div>
  );
}

export default Contact;