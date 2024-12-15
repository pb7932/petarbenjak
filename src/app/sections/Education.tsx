'use client'

import React from 'react'
import Image from 'next/image';
import useInViewAnimation from '../hooks/useInViewAnimation';
import { prefix } from '../assets/prefix';
import { useTranslations } from 'next-intl';

const Education = ({t}) => {
//   const t = useTranslations('education')
  t = t['education']

  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [e1Ref, e1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left');
  const [e2Ref, e2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');
  const [e3Ref, e3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-right');
  
  return (
    <div className='flex flex-col justify-center items-center max-container'>
        <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24`}>{t['h']}</h2>
        <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-24  flex-wrap'>
            
            <div ref={e1Ref} className={`slide-in-left-pre ${e1Animation} card-blob`}>
              <div className="card-blob-bg p-4 flex flex-col justify-start items-start leading-none">
                <h4 className='text-lg'>{t['h1-field']}</h4>
                <h3 className='text-3xl font-semibold'>{t['h1-level']}</h3>
                <h4 className='text-sm'>{t['h1-fac']}</h4>  
                <p className='text-md opacity-60 mt-20'>{t['h1-date']}</p>
                <img className='absolute bottom-0 right-0 w-16 h-auto' src={'fer-logo.png'} alt={'FER logo'} width={64} height={48}></img>
              </div>
              <div className="blob"></div>
            </div>

            <div ref={e2Ref} className={`slide-in-top-pre ${e2Animation} card-blob`}>
              <div className="card-blob-bg p-4 flex flex-col justify-start items-start leading-none">
                <h4 className='text-lg'>{t['h2-field']}</h4>
                <h3 className='text-3xl font-semibold'>{t['h2-level']}</h3>
                <h4 className='text-sm'>{t['h2-fac']}</h4>  
                <p className='text-md opacity-60 mt-20'>{t['h2-date']}</p>
                <img className='absolute bottom-0 right-0 w-16 h-auto' src={'ku-leuven-logo.png'} alt={'KU Leuven logo'} width={64} height={48}></img>
              </div>
              <div className="blob"></div>
            </div>

            <div ref={e3Ref} className={`slide-in-right-pre ${e3Animation} card-blob`}>
              <div className="card-blob-bg p-4 flex flex-col justify-start items-start leading-none">
                <h4 className='text-lg'>{t['h3-field']}</h4>
                <h3 className='text-3xl font-semibold'>{t['h3-level']}</h3>
                <h4 className='text-sm'>{t['h3-fac']}</h4>  
                <p className='text-md opacity-60 mt-20'>{t['h3-date']}</p>
                <img className='absolute bottom-0 right-0 w-16 h-auto' src={'fer-logo2.png'} alt={'FER logo'} width={64} height={48}></img>
              </div>
              <div className="blob"></div>
            </div>

        </div>
    </div>
  )
}

export default Education