import Hero from "./sections/Hero";
import Education from "./sections/Education";
import Faq from "./sections/Faq";
import Work from "./sections/Work";
import SideQuest from "./sections/SideQuest";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 pb-64 bg-black overflow-x-hidden">
        <section className="bg-black text-white px-4 max-md:py-36">
            <Hero></Hero>
        </section>
        <section id="work-experience" className="relative bg-black text-white px-4 py-14">
            {/* <div className="circle-left"></div> */}
            {/* <div className="circle-right"></div> */}
            <Work></Work>
        </section>
        <section id="education" className="bg-black text-white px-6 py-14">
            <Education></Education>
        </section>
        {/* <section id="projects" className="w-full bg-black text-white py-14">
            <Projects></Projects>
        </section> */}
        <section id="side-quests" className="bg-black text-white px-4 py-14">
            <SideQuest></SideQuest>
        </section>
        <section id="faq" className="bg-black text-white px-4 pt-14">
            <Faq></Faq>
        </section>
    </main>
  );
}
