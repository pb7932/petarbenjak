'use client'

import React from 'react'
import Image from 'next/image';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { prefix } from '../assets/prefix';

const Education = () => {
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [e1Ref, e1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left');
  const [e2Ref, e2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [e3Ref, e3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-right');
  
  return (
    <div className='flex flex-col justify-center items-center max-container'>
        <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24`}>Education</h2>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-24  flex-wrap'>
            
            <div ref={e1Ref} className={`slide-in-left-pre ${e1Animation} card-blob`}>
              <div className="card-blob-bg p-4 flex flex-col justify-start items-start leading-none">
                <h4 className='text-lg'>Computer Science</h4>
                <h3 className='text-3xl font-semibold'>BACHELORS</h3>
                <h4 className='text-sm'>Faculty of Electrical Engineering and Computing</h4>  
                <p className='text-md opacity-60 mt-20'>Sep 2019 - Jul 2022</p>
                <img className='absolute bottom-0 right-0 w-16 h-auto' src={'fer-logo.png'} alt={'FER logo'} width={64} height={48}></img>
              </div>
              <div className="blob"></div>
            </div>

            <div ref={e2Ref} className={`slide-in-top-pre ${e2Animation} card-blob`}>
              <div className="card-blob-bg p-4 flex flex-col justify-start items-start leading-none">
                <h4 className='text-lg'>Artifficial Intelligence</h4>
                <h3 className='text-3xl font-semibold'>MASTER'S</h3>  
                <h4 className='text-sm'>KU Leuven</h4>
                <p className='text-md opacity-60 mt-20'>Sep 2022 - Jun 2023</p>
                <img className='absolute bottom-0 right-0 w-16 h-auto' src={'ku-leuven-logo.png'} alt={'KU Leuven logo'} width={64} height={48}></img>
              </div>
              <div className="blob"></div>
            </div>

            <div ref={e3Ref} className={`slide-in-right-pre ${e3Animation} card-blob`}>
              <div className="card-blob-bg p-4 flex flex-col justify-start items-start leading-none">
                <h4 className='text-lg'>Data Science</h4>
                <h3 className='text-3xl font-semibold'>MASTER'S</h3>  
                <h4 className='text-sm'>Faculty of Electrical Engineering and Computing</h4>  
                <p className='text-md opacity-60 mt-20'>Sep 2023 - Present</p>
                <img className='absolute bottom-0 right-0 w-16 h-auto' src={'fer-logo2.png'} alt={'FER logo'} width={64} height={48}></img>
              </div>
              <div className="blob"></div>
            </div>

        </div>
    </div>
  )
}

export default Education