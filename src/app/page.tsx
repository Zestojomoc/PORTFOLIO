import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import OutsideTheIDE from "@/sections/OutsideTheIDE";
import Connect from "@/sections/Connect";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black">
      <Hero />
      <Projects />
      <TechStack />
      <OutsideTheIDE />
      <Connect />
    </div>
  );
}
