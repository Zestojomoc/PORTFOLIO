import Hero from "@/sections/Hero";
import WhoAmI from "@/sections/WhoAmI";
import TechStack from "@/sections/TechStack";
import Services from "@/sections/Services";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Connect from "@/sections/Connect";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black">
      <Hero />
      <WhoAmI />
      <TechStack />
      <Services />
      <Skills />
      <Projects />
      <Connect />
    </div>
  );
}
