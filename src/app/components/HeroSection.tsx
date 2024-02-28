import React from 'react'
import { airbeat, fira_mono } from "../layout";
import { RiAtLine, RiDiscordLine, RiGithubLine, RiLinkedinFill } from "react-icons/ri";

const style = { }

const HeroSection = () => {
  return (
    <div className="bg-light-black">
 
  <div className="relative isolate px-6 py-24 pt-14 lg:px-8">
    
    <div className="mx-auto  py-32 sm:py-48 lg:py-36">

      <div className="text-center">
        <h1 className={`${airbeat.className} drop-shadow-xl-white lg:text-9xl text-7xl text-blue-white`}>ARGHYA SARKAR</h1>
        <p className={`${fira_mono.className} my-4 mx-auto drop-shadow-xl-white max-w-4xl lg:text-2xl text-blue-white text-md`}>I am a student hailing from India passionate in everything 
 <span className="text-red-400"> computers</span>, <span className='text-green-400'> physics</span> and  <span className="text-sky-400"> mathematics</span></p>
        <div className=" space-x-0">
            <ul className='mx-auto flex items-center space-x-12 max-w-md py-28 links'>
                <li className='drop-shadow-xl-white text-blue-white text-7xl heading-6 font-semibold'><RiGithubLine  style={ style }/></li>
                <li className='drop-shadow-xl-white text-blue-white text-7xl heading-6 font-semibold'><RiLinkedinFill  style={ style }/></li>
                <li className='drop-shadow-xl-white text-blue-white text-7xl heading-6 font-semibold'><RiAtLine  style={ style }/></li>
                <li className='drop-shadow-xl-white text-blue-white text-7xl heading-6 font-semibold'><RiDiscordLine  style={ style }/></li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection