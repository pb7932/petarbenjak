'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import Spinner from '../Components/Spinner';

const Technologies = ({t}) => {
  t = t['technologies']

  const logos = ['logos/Angular_logo.png', 'logos/React_logo.png', 'logos/Tailwind_CSS_logo.png', 'logos/Adobe_Express_logo.png', 'logos/Word_logo.png', 'logos/Excel_logo.png', 'logos/Powerpoint_logo.png']

  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <div className='flex flex-col justify-center items-center max-container'>
        <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24`}>{t['h']}</h2>
        <div className='w-[90vw]'>
            <Spinner logos={logos}></Spinner>
        </div>
    </div>
  )
}

export default Technologies