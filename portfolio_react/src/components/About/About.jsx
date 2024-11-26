import React from 'react'


const About = () => {
    return (
        <div id='About' className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        {/* About Title */}
        <h2 className="text-3xl font-bold mb-5">About</h2>
      
        {/* Flexbox Container for Left and Right Sections */}
        <div className="flex gap-10">
          
          {/* Left Side: Frontend Developer Information */}
          <div className="left-side w-1/2 p-4">
            <h3 className="text-3xl font-bold text-yellow-300 pb-3">Frontend Developer</h3>
            <p className="text-justify text-2xl md:text-lg">
            A creative and detail-oriented Frontend Developer with expertise in HTML, CSS, JavaScript, React, and Tailwind. Passionate about building responsive, user-friendly websites with clean, modern designs. Proficient in crafting seamless user interfaces and ensuring optimal performance across devices. Focused on continuous learning and keeping up-to-date with the latest web development trends and technologies.
            </p>
          </div>
      
          {/* Right Side: Education Information */}
          <div className="right-side w-1/2 p-4 flex justify-end">
            <div className="education-content text-left">
              <h3 className="text-3xl font-bold text-yellow-300 pb-3">Education</h3>
              <div className="education-item">
                <h4 className="text-2xl font-semibold">Bachelors Of Information Management</h4>
                <p>National College of Computer Studies (TU) 2020-Ongoing</p>
              </div>
              <div className="education-item mt-4">
                <h4 className="text-2xl font-semibold">Higher Secondary Examination Board</h4>
                <p>National College of Computer Studies (Management) 2018-2020</p>
              </div>
              <div className="education-item mt-4">
                <h4 className="text-2xl font-semibold">Secondary Education Examination</h4>
                <p>Whitefield Higher Secondary School 2005-2018</p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
      

      
    )
}

export default About