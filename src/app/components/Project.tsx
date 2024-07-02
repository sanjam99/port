import React from 'react';
import Pro from './Pro';

const projects = [
  {
    number: "01",
    title: "Crypto Screener Application",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
  },
  {
    number: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
  },
  {
    number: "03",
    title: "Blog Website Template",
    description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
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
