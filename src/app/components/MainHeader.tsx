import React from "react";
import "@/app/styles/home.module.css";
import { airbeat } from "../layout";
const MainHeader = () => {
  return (
    <div>
      <header className="bg-light-black">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between p-24 lg:px-8"
          aria-label="Landing"
        >
          
          <a href="#" className={`${airbeat.className} drop-shadow-xl-white text-2xl font-semibold leading-6 text-blue-white`}>
            Home
          </a>
          <a href="#" className={`${airbeat.className} drop-shadow-xl-white text-2xl font-semibold leading-6 text-blue-white`}>
            About
          </a>
          <a href="#" className={`${airbeat.className} drop-shadow-xl-white text-2xl font-semibold leading-6 text-blue-white`}>
            Projects
          </a>
          <a href="#" className={`${airbeat.className} drop-shadow-xl-white text-2xl font-semibold leading-6 text-blue-white`}>
            Writings
          </a>
          <a href="#" className={`${airbeat.className} drop-shadow-xl-white text-2xl font-semibold leading-6 text-blue-white`}>
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
