'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import FaqCard from '../Components/FaqCard';

const Faq = () => {
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <div className='max-container flex flex-col justify-center items-center'>
        <h2 ref={h2Ref} className={`slidetoppre ${h2Animation} font-inter text-4xl mb-24 text-center`}>Frequently Asked Questions</h2>
        <div className='w-full max-w-3xl'>
            <FaqCard q={'What is your goal?'} a={'To develop myself in all dimensions of human character. To find and pursuit truth.'}></FaqCard>
        </div>
        <div className='w-full max-w-3xl'>
            <FaqCard q={'What do you like to do in your free time?'} a={'Educate myself by reading books and listening to wise people. Work on my mental and physical strenght.'}></FaqCard>
        </div>
        <div className='w-full max-w-3xl'>
            <FaqCard q={'What are your best lifts?'} a={'Squat: 157.5 kg, bench: 100kg, deadlift: 190 kg.'}></FaqCard>
        </div>
        <div className='w-full max-w-3xl'>
            <FaqCard q={'What are your best running times?'} a={'Half marathon: 1h 42m, marathon: 4h 12m.'}></FaqCard>
        </div>
    </div>
  )
}

export default Faq