import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div id="footer" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contacts</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel Free To reach out</h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:luzzadangol456@gmail.com" className="text-white hover:underline hover:text-yellow-500">
            luzzadangol456@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/luzza-dangol-b1b56a338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-yellow-500"
          >
            linkedin.com/in/luzza-dangol-b1b56a338/
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/luzza07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-yellow-500"
          >
            github.com/luzza07
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
