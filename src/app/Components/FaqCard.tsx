'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import question from '../assets/icons/question-mark.svg'

const FaqCard = ({q,a}) => {
    const [className, setClassName] = useState('question-pre');

    // Function to toggle the class
    const toggleClass = () => {
        if (className === 'question-pre') {
            setClassName('question');
        } else {
            setClassName('question-pre');
        }
    };

    return (
        <div className='w-full border-b-2 border-purple px-4 py-4'>
            <div className='flex flex-row justify-start items-center gap-4 cursor-pointer' onClick={toggleClass}>
                <Image className='w-6 h-6' src={question} alt={'Question mark'}></Image>
                <p className='text-xl font-semibold' dangerouslySetInnerHTML={{ __html: q }}></p>
            </div>
            <p className={`${className} transition-all duration-0 ease-in-out pl-10`}>{a}</p>
        </div>
    );
}

export default FaqCard