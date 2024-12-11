'use client'
import React, { useState } from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import linkedinLogo from '../assets/icons/linkedin-logo.svg'
import mail from '../assets/icons/mail.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className={` text-white w-full fixed top-0  font-montserrat font-semibold z-50`}>
        <div className='flex-row justify-center items-center gap-24 hidden lg:flex w-full bg-black-op backdrop-blur-sm h-full py-4'>
            <div className='flex flex-row justify-center items-center gap-4'>
                <a href='https://www.linkedin.com/in/petar-benjak/' target='_blank'><Image className='w-8 h-8' src={linkedinLogo} alt={'LinkedIn logo'}></Image></a>
                <a href='mailto:petarbenjak1@gmail.com' target='_blank'><Image className='w-8 h-8' src={mail} alt={'Mail icon'}></Image></a>
            </div>
            <ul className='flex flex-row justify-center items-center gap-6'>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#work-experience">Work experience</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#education">Education</a></li>
                {/* <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#projects">Projects</a></li> */}
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#side-quests">Side Quests</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#faq">FAQ</a></li>
            </ul>
        </div>

        <div className={`relative w-full lg:hidden flex flex-row`}>
            <ul className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-6 h-[100vh] bg-black-op backdrop-blur-sm py-4 transition-all duration-200  ${isOpen ? 'z-0 nav-animate' : ' opacity-0 translate-x-full -z-50'}`}>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#work-experience" onClick={toggleMenu}>Work experience</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#education" onClick={toggleMenu}>Education</a></li>
                {/* <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#projects" onClick={toggleMenu}>Projects</a></li> */}
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#side-quests" onClick={toggleMenu}>Side Quests</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
            </ul>
            <div className='flex flex-row justify-center items-center gap-4 absolute top-3 w-full'>
                <a href='https://www.linkedin.com/in/petar-benjak/' target='_blank'><Image className='w-8 h-8' src={linkedinLogo} alt={'LinkedIn logo'}></Image></a>
                <a href='mailto:petarbenjak1@gmail.com' target='_blank'><Image className='w-8 h-8' src={mail} alt={'Mail icon'}></Image></a>
            </div>
            <label className={`container `} >
              <div className={`checkmark ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </label>
        </div>
    </nav>
  )
}

export default Navbar