import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Faq from "./sections/Faq";
import Work from "./sections/Work";
import SideQuest from "./sections/SideQuest";
import hr from '../../messages/hr.json';
import Spinner from "./Components/Spinner";

import angularLogo from '../../public/logos/Angular_logo.png'
import reactLogo from '../../public/logos/React_logo.png'
import tailwindLogo from '../../public/logos/Tailwind_CSS_logo.png'
import adobeLogo from '../../public/logos/Adobe_Express_logo.png'
import wordLogo from '../../public/logos/Word_logo.png'
import excelLogo from '../../public/logos/Excel_logo.png'
import powerpointLogo from '../../public/logos/Powerpoint_logo.png'
import Technologies from "./sections/Technologies";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 pb-64 bg-black overflow-x-hidden">
        <section id="home" className="bg-black text-white px-4 max-md:py-36">
            <Hero t={hr}></Hero>
        </section>
        <section id="work-experience" className="relative bg-black text-white px-4 py-10">
            <Work t={hr}></Work>
        </section>
        <section id="education" className="bg-black text-white px-4 py-14">
            <Education t={hr}></Education>
        </section>
        <section id="projects" className="w-full bg-black text-white py-14">
            <Technologies t={hr}></Technologies>
        </section>
        <section id="side-quests" className="bg-black text-white px-4 py-14">
            <SideQuest t={hr}></SideQuest>
        </section>
        <section id="faq" className="bg-black text-white px-4 pt-14">
            <Faq t={hr}></Faq>
        </section>
        
    </main>
  );
}
