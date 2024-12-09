'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import ProjectCard from '../Components/SideQuestCard';
import gameControllerIcon from '../assets/icons/game-controller.svg'
import processIcon from '../assets/icons/process.svg'

const Projects = () => {
  const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  return (
    <div className='flex flex-col justify-center items-center max-container w-ful px-4'>
        <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24`}>Projects</h2>
        
        <div className='flex flex-col justify-center items-center gap-36 flex-wrap w-full'>
            
            <div className='flex flex-col justify-center items-center bg-purple rounded-md'>
                <iframe className='rounded-md w-full aspect-video' src="https://plkgalacticos.hr" width="800" height="600"></iframe>
                <div className='w-full p-4'>
                    <h3 className='font-semibold text-xl'>Angular</h3>
                    <h3 className='font-semibold text-xl pt-2'>Tailwind CSS</h3>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center bg-purple rounded-md'>
                <iframe className='rounded-md w-full aspect-video' src="https://markokuzmic.com/#/" width="800" height="600"></iframe>
                <div className='w-full p-4'>
                    <h3 className='font-semibold text-xl'>Angular</h3>
                    <h3 className='font-semibold text-xl pt-2'>SCSS</h3>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects