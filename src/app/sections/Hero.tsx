'use client'
import React from 'react'
import Image from 'next/image'
import petarBenjak from '../assets/images/Petar Benjak cropped2.png'
import Counter from '../Components/Counter'
import useInViewAnimation from '../hooks/useInViewAnimation'
import dumbell from '../assets/icons/dumbbell.svg'
import maths from '../assets/icons/maths.svg'
import run from '../assets/icons/run.svg'

const Hero = () => {
  const [h1Ref, h2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-top');

  const [p1Ref, p1Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left-200');
  const [p2Ref, p2Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left-400');
  const [p3Ref, p3Animation] = useInViewAnimation({ threshold: 0.1 }, 'slide-in-left-600');

  const [c1Ref, c1Animation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');
  const [c2Ref, c2Animation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');
  const [c3Ref, c3Animation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');
  const [c4Ref, c4Animation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');
  const [c5Ref, c5Animation] = useInViewAnimation({ threshold: 0.1 }, 'scale-in-center');
  

  return (
    <div className='w-full flex flex-col justify-center items-center max-container xl:min-h-[90vh]'>
        <div className='flex-2 w-full py-0 md:py-24 flex flex-col  lg:flex-row justify-between items-center'>
            <div>
                <h1 ref={h1Ref} className={`slide-top-pre ${h2Animation} text-6xl font-inter lg:mt-24 leading-none ml-0 pl-0`}>Life Long Learner</h1>
                <div ref={p1Ref} className={`slide-in-left-pre ${p1Animation} max-w-2xl pt-24 text-2xl flex flex-row justify-start items-center gap-4`}>
                    <Image className='w-8 h-auto' src={maths} alt={'Mathematics icon'}></Image>
                    <p>Nathional champion in mathematics</p>
                </div>
                <div ref={p2Ref} className={`slide-in-left-pre ${p2Animation} max-w-2xl pt-4 text-2xl flex flex-row justify-start items-center gap-4`}>
                    <Image className='w-8 h-auto' src={dumbell} alt={'Dumbell icon'}></Image>
                    <p>National powerlifting champion</p>
                </div>
                <div ref={p3Ref} className={`slide-in-left-pre ${p3Animation} max-w-2xl pt-4 text-2xl flex flex-row justify-start items-center gap-4`}>
                    <Image className='w-8 h-auto' src={run} alt={'Running icon'}></Image>
                    <p>Marathon runner</p>
                </div>
                
            </div>
            {/* <div className='hidden xl:flex flex-col xl:flex-row justify-center items-center gap-16'>
                <div className='counter-card glow-sm w-fit px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={120}></Counter>
                    </div>
                    <p>Kilos lifted</p>
                </div>

                <div className='counter-card glow-sm w-fit px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={5}></Counter>
                    </div>
                    <p>Kilometers run</p>
                </div>

                <div className='counter-card glow-sm w-fit px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={10}></Counter>
                    </div>
                    <p>Smiles put on faces</p>
                </div>

                <div className='counter-card glow-sm w-fit px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={3}></Counter>
                    </div>
                    <p>Handskahes made</p>
                </div>

                <div className='counter-card glow-sm w-fit px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={50}></Counter>
                    </div>
                    <p>Books read</p>
                </div>
            </div> */}

            <div className='max-lg:scale-in-center-100-12 lg:scale-in-center-600 relative flex-1 flex flex-row justify-end items-center '>
                <Image className='z-10 max-h-[640px] object-fill ml-24 xl:ml-0 mt-24 xl:mt-0' src={petarBenjak} alt={"Petar Benjak"} ></Image>
                <div className='w-96 h-96 rounded-md border-2 border-purple absolute bottom-0 lg:left-[38%] bg-purple-op'>
                        <div className='dot'></div>

                    <div className='w-80 h-80 rounded-md border-2 border-purple absolute bottom-4 left-8 bg-black'>
                        <div className='dot dot-2'></div>

                        <div className='w-64 h-64 rounded-md border-2 border-purple absolute bottom-4 left-8 bg-purple-op'>
                            <div className='dot dot-3'></div>

                            <div className='w-48 h-48 rounded-md border-2 border-purple absolute bottom-4 left-8 bg-black'>
                                <div className='dot dot-4'></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='hidden lg:flex flex-col lg:flex-row justify-center items-center gap-16 mt-32 lg:mt-0'>
                <div className='lg:scale-in-center-100 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={3700} delay={1600}></Counter>
                    </div>
                    <p>Kilos lifted</p>
                </div>

                <div className='lg:scale-in-center-200 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={5} delay={1800}></Counter>
                    </div>
                    <p>Kilometers run</p>
                </div>

                <div className='lg:scale-in-center-300 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={10} delay={2000}></Counter>
                    </div>
                    <p>Smiles put on faces</p>
                </div>

                <div className='lg:scale-in-center-400 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={3} delay={2200}></Counter>
                    </div>
                    <p>Handshakes made</p>
                </div>

                <div className='lg:scale-in-center-500 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md'>
                    <div className='font-semibold text-2xl'>
                        <Counter end={60} label='' delay={2400}></Counter>
                    </div>
                    <p>Books read</p>
                </div>
        </div>

        <div className='lg:hidden flex flex-col lg:flex-row justify-center items-center gap-24 mt-32 lg:mt-0'>
                <div ref={c1Ref} className={`scale-in-center-pre ${c1Animation} counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md`}>
                    <div className='font-semibold text-2xl'>
                        <Counter end={3700}></Counter>
                    </div>
                    <p>Kilos lifted</p>
                </div>

                <div ref={c2Ref} className={`scale-in-center-pre ${c2Animation} counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md`}>
                    <div className='font-semibold text-2xl'>
                        <Counter end={5}></Counter>
                    </div>
                    <p>Kilometers run</p>
                </div>

                <div ref={c3Ref} className={`scale-in-center-pre ${c3Animation} counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md`}>
                    <div className='font-semibold text-2xl'>
                        <Counter end={10}></Counter>
                    </div>
                    <p>Smiles put on faces</p>
                </div>

                <div ref={c4Ref} className={`scale-in-center-pre ${c4Animation} counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md`}>
                    <div className='font-semibold text-2xl'>
                        <Counter end={3}></Counter>
                    </div>
                    <p>Handshakes made</p>
                </div>

                <div ref={c5Ref} className={`scale-in-center-pre ${c5Animation} counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md`}>
                    <div className='font-semibold text-2xl'>
                        <Counter end={60} label=''></Counter>
                    </div>
                    <p>Books read</p>
                </div>
        </div>  

        
    </div>
  )
}

export default Hero