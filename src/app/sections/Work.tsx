'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import WorkCard from '../Components/WorkCard';
import { useTranslations } from 'next-intl';

const Work = ({t}) => {
//   const t = useTranslations('work-experience')
  t = t['work-experience']

  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <div className='flex flex-col justify-center items-center max-container'>
        <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24 text-center`}>{t['h']}</h2>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-24 flex-wrap'>
            <WorkCard heading={t['h1-job']} subheading={t['h1-company']} text={t['p1']} buttonLabel={t['date1']}></WorkCard>
            <WorkCard heading={t['h2-job']} subheading={t['h2-company']} text={t['p2']} buttonLabel={t['date2']}></WorkCard>
            <WorkCard heading={t['h3-job']} subheading={t['h3-company']} text={t['p3']} buttonLabel={t['date3']}></WorkCard>
        </div>
    </div>
  )
}

export default Work