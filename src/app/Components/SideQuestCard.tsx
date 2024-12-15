'use client'
import React from 'react'
import Image from 'next/image'
import useInViewAnimation from '../hooks/useInViewAnimation';
import DOMPurify from "dompurify";
import { useTranslations } from 'next-intl';

const SideQuestCard = ({btn, title, alt, text, icon, link=''}) => {
//   const t = useTranslations('side-quests')

  const [cRef, cAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left');

  return (
        <div ref={cRef} className={`slide-in-left-pre ${cAnimation} flex flex-col justify-between items-start w-fit min-h-[100%] max-w-xl bg-gradient-to-l from-purple to-gray-900 p-4 gap-4 rounded-lg shadow-md`}>
          <div>
            <div className="text-xl font-bold rounded-md">
              {title}
            </div>
            <div className="rounded-md text-sm mt-2">
                {text}
            </div>
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <button className="rounded-md bg-purple hover:bg-purple-bright hover:text-slate-200 duration-300 p-2">
                <Image className='w-8 h-auto' src={icon} alt={alt}></Image>
              {/* <svg xmlns="/assets/icons/exercise.svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg> */}
            </button>

            {link ? 
                <a href={link} target='_blank'>
                    <button className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                        <p className="relative z-10 font-medium tracking-wide">{btn}</p>
                   </button>
                </a> : ''}
          </div>
        </div>
  )
}

export default SideQuestCard