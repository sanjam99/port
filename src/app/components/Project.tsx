import React from 'react';
import Pro from './Pro';

const projects = [
  {
    number: "01",
    title: "Wanderlust",
    description: "A user-friendly platform for booking unique stays in India, built with JavaScript, EJS, Node.js,Express.js, Mongoose Middleware, and MongoDB."
  },
  {
    number: "02",
    title: "Jadoo",
    description: " A hotel management system with seamless booking experiences and AI-driven features, built with React,React Query, TypeScript, Material-UI, Figma, Node.js, and Redis."
  },
  {
    number: "03",
    title: "Simon Says Game",
    description: " A memory game built with HTML, CSS, JavaScript, and Github."
  }
];

const Project: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-12">
      <h1 className="text-4xl font-bold text-center mb-6 md:mb-12 capitalize">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <Pro
            key={project.number}
            number={project.number}
            title={project.title}
            description={project.description}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;