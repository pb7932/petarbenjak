'use client';
import React, { ChangeEvent, useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import linkedinLogo from '../assets/icons/linkedin-logo.svg'
import mail from '../assets/icons/mail.svg'
import { useRouter } from 'next/navigation';
import hr from '../../../messages/hr.json'
import { usePathname } from 'next/navigation'

const Navbar = ({t}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  t = t['nav']

  const router = useRouter();
  const pathname = usePathname()
  let firstSegment = pathname.split('/')[1];

  const [lang, setLang] = useState('hr');

  const changeLanguage = (value: string) => {
    router.push('/' + value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  useEffect(() => {
    if (firstSegment === 'en') {
        setLang('en')
    } else {
      setLang('hr')
    }
  }, [firstSegment]); // 

//   useEffect(() => {
//     if (lang === 'en') {
        
//     } else {
//       setLang('hr')
//     }
//   }, [firstSegment]); // 
  
  return (
    <nav className={` text-white w-full fixed top-0  font-montserrat font-semibold z-50`}>
        <div className='flex-row justify-center items-center gap-24 hidden lg:flex w-full bg-black-op backdrop-blur-sm h-full py-4'>
            <div className='flex flex-row justify-center items-center gap-4'>
                <a href='https://www.linkedin.com/in/petar-benjak/' target='_blank'><Image className='w-8 h-8' src={linkedinLogo} alt={'LinkedIn logo'}></Image></a>
                <a href='mailto:petarbenjak1@gmail.com' target='_blank'><Image className='w-8 h-8' src={mail} alt={'Mail icon'}></Image></a>
            </div>
            <ul className='flex flex-row justify-center items-center gap-6'>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#home">{t['home']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#work-experience">{t['work-experience']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#education">{t['education']}</a></li>
                {/* <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#projects">Projects</a></li> */}
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#side-quests">{t['side-quests']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#faq">{t['faq']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#contact">{t['contact']}</a></li>
            </ul>
            <select className='bg-transparent' value={lang} onChange={handleLanguageChange}>
              <option className='bg-black' value="en">EN</option>
              <option className='bg-black' value="hr">HR</option>
            </select>
        </div>

        <div className={`relative w-full lg:hidden flex flex-row`}>
            <ul className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-6 h-[100vh] bg-black-op backdrop-blur-sm py-4 transition-all duration-200  ${isOpen ? 'z-0 nav-animate' : ' opacity-0 translate-x-full -z-50'}`}>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#home" onClick={toggleMenu}>{t['home']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#work-experience" onClick={toggleMenu}>{t['work-experience']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#education" onClick={toggleMenu}>{t['education']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#side-quests" onClick={toggleMenu}>{t['side-quests']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#faq" onClick={toggleMenu}>{t['faq']}</a></li>
                <li className='duration-200 transition-all ease-in-out hover:-translate-y-0.5'><a href="#contact" onClick={toggleMenu}>{t['contact']}</a></li>
            </ul>
            <select className='bg-transparent absolute top-4 left-4 z-[100] cursor-pointer' onChange={handleLanguageChange} value={lang}>
              <option className='bg-black' value="en">EN</option>
              <option className='bg-black' value="hr">HR</option>
            </select>
            <div className='flex flex-row justify-center items-center gap-4 absolute top-3 w-full'>
                <a href='https://www.linkedin.com/in/petar-benjak/' target='_blank'><Image className='w-8 h-8' src={linkedinLogo} alt={'LinkedIn logo'}></Image></a>
                <a href='mailto:petarbenjak1@gmail.com' target='_blank'><Image className='w-8 h-8' src={mail} alt={'Mail icon'}></Image></a>
            </div>
            <label className={`container z-[100]`} >
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