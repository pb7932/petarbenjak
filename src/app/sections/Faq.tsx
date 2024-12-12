'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import FaqCard from '../Components/FaqCard';
import { useTranslations } from 'next-intl';

const Faq = () => {
  const t = useTranslations('faq')

  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <div className='max-container flex flex-col justify-center items-center'>
        <h2 ref={h2Ref} className={`slidetoppre ${h2Animation} font-inter text-4xl mb-24 text-center`}>{t('h')}</h2>
        <div className='w-full max-w-3xl'>
            <FaqCard q={t('q1')} a={t('a1')}></FaqCard>
        </div>
        <div className='w-full max-w-3xl'>
            <FaqCard q={t('q2')} a={t('a2')}></FaqCard>
        </div>
        <div className='w-full max-w-3xl'>
            <FaqCard q={t('q3')} a={t('a3')}></FaqCard>
        </div>
        <div className='w-full max-w-3xl'>
            <FaqCard q={t('q4')} a={t('a4')}></FaqCard>
        </div>
    </div>
  )
}

export default Faq