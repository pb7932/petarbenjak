import React from 'react'
import Image from 'next/image';
import email from '../assets/icons/mail.svg';
import linkedinLogo from '../assets/icons/linkedin-logo.svg';
import resume from '../assets/icons/resume.svg';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer')
    
  return (
    <div id='contact' className='w-full min-h-[30vh] bg-black text-white px-4 pb-24'>
        <img className="w-48 h-auto m-auto" src="PetarBenjak logo cropped.png" alt="Petar Benjak logo" />
       
        <div className='flex flex-row justify-evenly items-center gap-8 w-full mt-32 text-lg lg:text-3xl'>
            <a href='https://www.linkedin.com/in/petar-benjak/' target='_blank'>
                <div className='w-full flex flex-row justify-center items-center gap-2 lg:gap-4 max-w-sm'>
                    <h2>LinkedIn</h2>
                    <Image className='w-8 lg:w-10 h-auto' src={linkedinLogo} alt={'LinkedIn icon'}></Image>
                </div>
            </a>
            <a href='mailto:petarbenjak1@gmail.com' target='_blank'>
                <div className='w-full flex flex-row justify-center items-center gap-2 lg:gap-4 max-w-sm'>
                    <h2>Email</h2>
                    <Image className='w-8 lg:w-10 h-auto' src={email} alt={'Email icon'}></Image>
                </div>
            </a>
            <a href="documents/CV.pdf" download="CV.pdf">
                <div className='w-full flex flex-row justify-center items-center gap-2 lg:gap-4 max-w-sm'>
                    <h2>{t('cv')}</h2>
                    <Image className='w-8 lg:w-10 h-auto' src={resume} alt="Resume icon" />
                </div>
            </a>
        </div>
    </div>
  )
}

export default Footer