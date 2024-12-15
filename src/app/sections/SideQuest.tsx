'use client'
import React from 'react'
import useInViewAnimation from '../hooks/useInViewAnimation';
import SideQuestCard from '../Components/SideQuestCard';
import gameControllerIcon from '../assets/icons/game-controller.svg'
import processIcon from '../assets/icons/process.svg'
import piggyBank from '../assets/icons/piggy-bank.svg'
import dollar from '../assets/icons/dollar.svg'
import { useTranslations } from 'next-intl';

const SideQuest = ({t}) => {
    // const t = useTranslations('side-quests')
    t = t['side-quests']

    const [h2Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

    return (
      <div className='flex flex-col justify-center items-center max-container'>
          <h2 ref={h2Ref} className={`slide-top-pre ${h2Animation} font-inter text-4xl mb-24`}>{t['h']}</h2>
          <div className='flex flex-col lg:flex-row justify-center items-stretch gap-12'>
              <SideQuestCard btn={t['visit']} icon={dollar} alt={'Piggy bank icon'} title={t['h1']} text={t['p1']} link={'https://plkgalacticos.hr/'}></SideQuestCard>
              <SideQuestCard btn={t['visit']} icon={gameControllerIcon} alt={'Game controller icon'} title={t['h2']} text={t['p2']}></SideQuestCard>
              <SideQuestCard btn={t['visit']} icon={processIcon} alt={'Process icon'} title={t['h3']} text={t['p3']}></SideQuestCard>
          </div>
      </div>
    )
}

export default SideQuest