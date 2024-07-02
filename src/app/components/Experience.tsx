import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="flex items-start justify-start px-6 py-8 sm:px-10 md:px-16 lg:px-20 xl:px-24 bg-black">
      <div className="flex flex-col space-y-5 items-center justify-center w-full max-w-7xl">
        <div className="flex space-x-4 items-center justify-center py-5">
          <p className="text-5xl leading-10 text-white">My Experience</p>
        </div>
        <div className="flex flex-col space-y-8 items-start justify-start w-full px-6 py-10 rounded-lg">
          <div className="flex flex-col space-y-7 items-start justify-start p-6 border rounded-lg border-gray-500">
            <div className="flex space-x-2.5 items-center justify-between w-full">
              <div className="flex space-x-8 items-center justify-start">
                <img
                  className="w-8 h-8 rounded-lg"
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glassdoor.com%2FReviews%2FOasis-Infobyte-Internship-Reviews-EI_IE7563232.0%2C14_KO15%2C25.htm&psig=AOvVaw3ADb3eH_GzAtMLbOVwX03X&ust=1719944810759000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiJ2e-7hocDFQAAAAAdAAAAABAE"
                  alt="Google"
                />
                <p className="text-2xl leading-7 text-center text-white">
                  Software Intern
                </p>
              </div>
              <p className="text-base leading-tight text-center text-gray-300">
              Aug 2023 - Aug 2023
              </p>
            </div>
            <p className="text-base tracking-wide leading-normal text-gray-300">
              As a Software Intern at Infobytes, I played a pivotal role in
              developing innovative solutions for core search algorithms.
              Collaborating with a dynamic team of engineers, I contributed to the
              enhancement of search accuracy and efficiency, optimizing user
              experiences for millions of users worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
