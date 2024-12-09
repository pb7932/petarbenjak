'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';

const WorkCard = ({heading, subheading, text, buttonLabel}) => {
  const [cardRef, cardAnimation] = useInViewAnimation({ threshold: 0.1 }, 'tilt-in-left');

  return (
    <div ref={cardRef} className={`tilt-in-left-pre ${cardAnimation}`}
    >
        <div className="relative h-full w-full max-w-[30em] border-2 border-purple rounded-[1.5em] bg-gradient-to-br from-purple via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-montserrat p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse"></div>

          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
            <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
            <div className="w-2 h-2 rounded-full bg-purple-300/10"></div>
          </div>

          <div className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3">
            <h2 className='font-semibold'>{subheading}</h2>
            <h1 className="font-nunito text-[2.2em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
              {heading}
            </h1>
            <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light">
              {text}
            </p>
          </div>

          <button className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>

            <p className="relative z-10 font-medium tracking-wide">{buttonLabel}</p>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              ></path>
            </svg> */}
          </button>

          <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse"></div>
        </div>

    </div>
  )
}

export default WorkCard
