import React from 'react'
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

function Skills() {
    return (
        <div className="flex flex-col items-center justify-center px-4 space-y-5 md:px-8">
            <div className="flex flex-col items-center justify-center py-5 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <p className="text-3xl leading-10 md:text-5xl items-center justify-center w-fit">My Skills</p>
            </div>
            <div className="flex flex-col items-center justify-start py-5">
                <div className="grid gap-4 py-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:justify-center sm:items-center">
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <FaGitAlt className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">Git</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <RiJavascriptFill className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <FaReact className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <BiLogoTypescript className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">TypeScript</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <SiTailwindcss className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">Tailwindcss</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <SiReactquery className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">React Query</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <FaNode className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">NodeJS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <SiPostgresql className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">Postgresql</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <SiMongodb className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">MongoDB</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-36 sm:w-48 h-48 p-6 space-y-8 bg-white border-2 border-black rounded transition duration-300 hover:bg-black hover:text-white hover:border-white">
                        <SiExpress className="w-14 h-14" />
                        <p className="text-xl text-center capitalize">Express</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
