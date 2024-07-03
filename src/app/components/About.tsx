import React from "react";
import Image from "next/image";
import man from '../assets/man.png'

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-24">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2.5 items-center justify-between w-full max-w-7xl">
        <div className="relative w-full md:flex-1 md:p-6 md:justify-start md:items-start">
          <Image
           src={man}
          //  width={140}
          //  height={40}
           alt="Logo"
         />
        </div>
        <div className="flex flex-col space-y-5 w-full md:w-auto md:flex-1">
          <div className="flex space-x-4 items-start justify-start py-5">
            <p className="text-5xl tracking-wider leading-7">About Me</p>
          </div>
          <div className="flex flex-col space-y-5">
            <p className="text-base tracking-wide leading-normal text-gray-500">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-base tracking-wide leading-normal text-gray-500">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="text-base tracking-wide leading-normal text-gray-500">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;