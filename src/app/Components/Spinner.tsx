import React from 'react'
import Image from 'next/image';

const Spinner = ({logos}) => {
    const extendedLogos = [...logos, ...logos];
  return (
//      <div className='spinnerContainer  relative w-[80] m-auto flex flex-row justify-center items-center py-16'>
//             <div className='logoContainer relative flex flex-row justify-center items-center '>
//                 <div className='min-w-[100vw] flex flex-row justify-evenly items-center'>
//                     {logos.map((logo, index) => (
//                             <img key={index} src={logo} alt={`Logo ${index + 1}`} className='mx-4 lg:mx-12 w-10 lg:w-16'></img>
//                         ))}
//                 </div>
                
//             </div>

//             <div className='logoContainer relative flex flex-row justify-center items-center'>
                
//                 <div className='min-w-[100vw] flex flex-row justify-evenly items-center'>
//                      {logos.map((logo, index) => (
//                         <img key={index} src={logo} alt={`Logo ${index + 1}`} className='w-10 lg:w-16 mx-4 lg:mx-12'></img>
//                     ))}
//                 </div>
//             </div>
//     </div>
    <div className="spinner spinner-home" data-direction="left">
        <ul className="spinner-inner">
                        {logos.map((logo, index) => (
                            <li key={index} className="spinner-item"><img  src={logo} alt={`Logo ${index + 1}`} className=''></img></li>
                        ))}
                         {logos.map((logo, index) => (
                            <li key={index} className="spinner-item"><img  src={logo} alt={`Logo ${index + 1}`} className=''></img></li>
                        ))}
                         {logos.map((logo, index) => (
                            <li key={index} className="spinner-item"><img  src={logo} alt={`Logo ${index + 1}`} className=''></img></li>
                        ))}
                         {logos.map((logo, index) => (
                            <li key={index} className="spinner-item"><img  src={logo} alt={`Logo ${index + 1}`} className=''></img></li>
                        ))}
        </ul>
      </div>
 )
}

export default Spinner


{/* <div class="spinner spinner-home" data-direction="left">
    <ul class="spinner-inner">
      <li class="spinner-item"><img src="/assets/home/spinner/message.svg">{{"home.spinner.1" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/training.svg">{{"home.spinner.2" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/filter.svg">{{"home.spinner.3" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/wrench.svg">{{"home.spinner.4" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/plan.svg">{{"home.spinner.5" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/user.svg">{{"home.spinner.6" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/motivation.svg">{{"home.spinner.7" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/diet.svg">{{"home.spinner.8" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/computer.svg">{{"home.spinner.9" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/message.svg">{{"home.spinner.1" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/training.svg">{{"home.spinner.2" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/filter.svg">{{"home.spinner.3" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/wrench.svg">{{"home.spinner.4" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/plan.svg">{{"home.spinner.5" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/user.svg">{{"home.spinner.6" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/motivation.svg">{{"home.spinner.7" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/diet.svg">{{"home.spinner.8" | translate}}</li>
      <li class="spinner-item"><img src="/assets/home/spinner/computer.svg">{{"home.spinner.9" | translate}}</li>
    </ul>
  </div> */}