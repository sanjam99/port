import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProProps {
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
}

const Pro: React.FC<ProProps> = ({ number, title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-xl shadow-lg overflow-hidden`}>
      <div className="relative w-full h-64 md:w-1/2 md:h-auto">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt={`Image for ${title}`}
        />
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
        <div className="text-4xl md:text-6xl font-bold text-gray-400 mb-4">{number}</div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        <a href="#" className="underline">Read more</a>
      </div>
    </div>
  );
}

export default Pro;
