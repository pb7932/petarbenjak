'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import WorkCard from '../Components/WorkCard';

const Work = () => {
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <div className='flex flex-col justify-center items-center max-container'>
        <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24 text-center`}>Work Experience</h2>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-24 flex-wrap'>
            <WorkCard heading={'Barista / Co-manager'} subheading={'Peti okus'} text={'Turned first-time guests into loyal customers through charismatic interaction and unparalleled service delivery. Honed exceptional communication skills, adept at navigating complex customer interactions and resolving conflicts with ease, ensuring every guest leaves with a positive impression. Directed and uplifted a team of junior bartenders, instilling best practices and a winning mindset.'} buttonLabel={'Jun 2025 - Jun 2020'}></WorkCard>
            <WorkCard heading={'Machine Learning Engineer'} subheading={'CROZ AI'} text={'Engineered a robust ML model integrating state-of-the-art NLP frameworks with advanced speech recognition tools. The model is utilized to interpret human speech, extract pivotal keywords, and convert these into actionable SQL commands for real-time database insertions.'} buttonLabel={'Jul 2023 - Sep 2023'}></WorkCard>
            <WorkCard heading={'Software Developer'} subheading={'Ericsson Nikola Tesla'} text={'Writing precise and effective test cases to validate the functionality, reliability, and performance of software applications. Supporting the delivery of robust software products that meet strict quality standards.'} buttonLabel={'May 2024 - Present'}></WorkCard>
        </div>
    </div>
  )
}

export default Work