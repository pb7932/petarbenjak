'use client'
import React from 'react'
import Image from 'next/image'
import useInViewAnimation from '../hooks/useInViewAnimation';

const SideQuestCard = ({title, text, icon, alt}) => {
  const [cRef, cAnimation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left');

  return (
        <div ref={cRef} className={`slide-in-left-pre ${cAnimation} flex flex-col justify-between items-start w-fit min-h-[100%] max-w-xl bg-gradient-to-l from-purple to-gray-900 p-4 gap-4 rounded-lg shadow-md`}>
          <div>
            <div className="text-xl font-bold capitalize rounded-md">
              {title}
            </div>
            <div className="rounded-md text-sm mt-2">
              {text}
            </div>
          </div>
          <div className="">
            <button className="rounded-md bg-purple hover:bg-purple-bright hover:text-slate-200 duration-300 p-2">
                <Image className='w-8 h-auto' src={icon} alt={'alt'}></Image>
              {/* <svg xmlns="/assets/icons/exercise.svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg> */}
            </button>
          </div>
        </div>
  )
}

export default SideQuestCard