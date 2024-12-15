import Hero from "../sections/Hero";
import Education from "../sections/Education";
import Faq from "../sections/Faq";
import Work from "../sections/Work";
import SideQuest from "../sections/SideQuest";
import en from '../../../messages/en.json';
import Technologies from "../sections/Technologies";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 pb-64 bg-black overflow-x-hidden text-white">
        <section id="home" className="bg-black text-white px-4 max-md:py-36">
            <Hero t={en}></Hero>
        </section>
        <section id="work-experience" className="relative bg-black text-white px-4 py-14">
            <Work t={en}></Work>
        </section>
        <section id="education" className="bg-black text-white px-4 py-14">
            <Education t={en}></Education>
        </section>
        <section id="projects" className="w-full bg-black text-white py-14">
            <Technologies t={en}></Technologies>
        </section>
        <section id="side-quests" className="bg-black text-white px-4 py-14">
            <SideQuest t={en}></SideQuest>
        </section>
        <section id="faq" className="bg-black text-white px-4 pt-14">
            <Faq t={en}></Faq>
        </section>
    </main>
  );
}
