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
            My name is Sahil Shriwatri, and I am a budding software engineer with a deep passion for technology and innovation. Currently, I am pursuing my B.Tech in Computer Science at G.H. Raisoni College of Engineering in Nagpur, maintaining an impressive 8.3 CGPA. My academic journey has been driven by a keen interest in programming languages such as Java, C, C++, and JavaScript, alongside practical experience with development frameworks like React.js, Node.js, and Express.js. My goal is to leverage these skills in a Software Engineer position at Google, where I can contribute to cutting-edge projects in distributed systems, machine learning, and information retrieval.
            </p>
            <p className="text-base tracking-wide leading-normal text-gray-500">
            During my time as a Software Intern at Infobyte in Nagpur, I honed my technical and collaborative skills by working on various projects, including developing a personal portfolio, landing page, and calculators using HTML, CSS, and JavaScript. This role allowed me to demonstrate my ability to work effectively in a team, solve complex problems, and deliver high-quality results under tight deadlines. I have also developed several personal projects, such as Wanderlust, a user-friendly platform for booking unique stays in India, and Jadoo, an AI-driven hotel management system. These projects have equipped me with hands-on experience in using modern technologies and frameworks.
            </p>
            <p className="text-base tracking-wide leading-normal text-gray-500">
            Outside of academics and internships, I actively participate in extra-curricular activities, such as the GDSC events at my college, and have achieved a global rank of 8340 in the Leetcode weekly contest 386. These experiences have not only sharpened my technical skills but also nurtured my adaptability, resilience, and strong communication abilities. As a proactive and empathetic individual, I thrive in challenging environments and am always eager to embrace new adventures in the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;