'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import SideQuestCard from '../Components/SideQuestCard';
import gameControllerIcon from '../assets/icons/game-controller.svg'
import processIcon from '../assets/icons/process.svg'
import piggyBank from '../assets/icons/piggy-bank.svg'
import dollar from '../assets/icons/dollar.svg'

const SideQuest = () => {
    const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

    return (
      <div className='flex flex-col justify-center items-center max-container'>
          <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24`}>Side Quests</h2>
          
          <div className='flex flex-col lg:flex-row justify-center items-stretch gap-12'>
              <SideQuestCard icon={dollar} alt={'Piggy bank icon'} title={'Fundrasing & Web Design'} text={"Designed and structured a brochure to raise funds, utilizing compelling visuals and clear messaging to attract sponsors. Crafted persuasive emails targeted at potential sponsors to secure financial support. Enhanced the professional appearance of the club by designing and developing its website, ensuring it was both user-friendly and visually appealing while maintaining the brand feel. Additionally, contributed to the management and structuring of content across the club's social media platforms."}></SideQuestCard>
              <SideQuestCard icon={gameControllerIcon} alt={'Game controller icon'} title={'STEM Games'} text={'As the lead volunteer at a student sports event, I orchestrated a seamless running competition, where meticulous planning and proactive management were crucial. My primary role involved strategizing the event layout and ensuring a smooth and impeccable execution. This experience honed my ability to manage logistics, and execute a large-scale event that left participants with a memorable and positive experience.'}></SideQuestCard>
              <SideQuestCard icon={processIcon} alt={'Process icon'} title={'Project Management'} text={'As the project manager for a faculty course project involving a team of six students, I orchestrated a complex project from conception through completion. My responsibilities included defining the project scope, setting timelines, and ensuring that each team member was fully engaged and contributing effectively to our collective goals. I facilitated regular meetings to foster a collaborative environment, encouraged transparent communication, and mediated any conflicts, ensuring that our project met academic expectations. This role sharpened my skills in team coordination, stakeholder communication, and delivering high-quality results under tight deadlines, all while maintaining a motivating team atmosphere.'}></SideQuestCard>
          </div>
      </div>
    )
}

export default SideQuest