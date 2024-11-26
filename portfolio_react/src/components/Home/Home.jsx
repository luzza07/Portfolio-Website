import React from 'react';
import pp from '../../assets/pp.jpg';
import TextChanger from '../TextChanger';

const Home = () => {
  return (
    <div className="text-white flex w-full items-start p-10 md:p-20">
      {/* Left Section: Text */}
      <div className="flex-1 pr-5">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter pt-3 pb-3 text-yellow-300">
          Frontend Developer
        </h2>

        {/* Paragraph that spans to the photo */}
        <p className="text-justify text-sm md:text-2xl leading-relaxed">
        I am a skilled Frontend Developer with expertise in HTML, CSS, JavaScript, React, and Tailwind. Passionate about creating responsive and user-friendly websites with modern designs. 
        </p>

        <button
          onClick={() =>
            window.open('https://drive.google.com/uc?id=1CR3-mlr8DDj6ixssFsNdLJab2pwa6NuL&export=download', '_blank')
          }
          className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] hover:underline hover:text-yellow-500"
        >
          Download My Resume
        </button>
      </div>

      {/* Right Section: Photo */}
      <div className="flex justify-end ">
        <img className="w-3/5 h-auto" src={pp} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
