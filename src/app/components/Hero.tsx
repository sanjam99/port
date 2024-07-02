import React from 'react';
import img from '../assets/Hero.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Hi! I am Sanket Jambhulkar.<br /> Full stack Developer Based in India
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I am a full-stack developer with expertise in building robust web applications from front-end design to back-end functionality. My portfolio showcases a variety of projects that demonstrate my skills in creating user-friendly interfaces, efficient server-side operations, and seamless integration of various technologies.
          </p>
          <div className='flex flex-auto space-x-4'>
          <div className="flex flex-col items-center justify-center w-10 h-10 p-6 border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
          <Link href="https://github.com/sanjam99">
            <FaGithub className='w-6 h-6' />
          </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-10 h-10 p-6 border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
          <Link href="https://www.reddit.com/user/Otherwise-Paper1056">
            <FaReddit className='w-6 h-6' />
          </Link>
          </div>
          </div>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex items-center justify-center">
          <Image
            src={img}
            width={890}
            height={596}
            alt="Human Man!"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
