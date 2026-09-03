import {
  Box,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode,
  GitBranch,
  Layers,
  Server,
  Terminal,
} from "lucide-react";

const technologies = [
  { name: "Laravel", Icon: Braces },
  { name: "PHP", Icon: Terminal },
  { name: "PostgreSQL", Icon: Database },
  { name: "Next.js", Icon: Layers },
  { name: "React", Icon: Code2 },
  { name: "Django", Icon: Server },
  { name: "Python", Icon: Code2 },
  { name: "JavaScript", Icon: Braces },
  { name: "Alpine.js", Icon: Box },
  { name: "Tailwind CSS", Icon: Layers },
  { name: "CSS", Icon: FileCode },
  { name: "HTML", Icon: FileCode },
  { name: "Git", Icon: GitBranch },
  { name: "GitHub", Icon: GitBranch },
  { name: "Vercel", Icon: Cloud },
  { name: "Docker", Icon: Box },
  { name: "Render", Icon: Cloud },
];

const technologyRows = [
  technologies.slice(0, 9),
  technologies.slice(9),
];

export default function TechStack() {
  return (
    <section id="stack" className="relative w-full overflow-hidden border-t border-neutral-900 bg-black py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 2xl:max-w-[1400px]">
        <div className="mb-12 md:mb-14">
          <span className="mb-2 block font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
            Technologies I Use
          </span>
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
            Tech Stack &amp; Tools
          </h3>
        </div>
      </div>

      <div className="space-y-3">
        {technologyRows.map((row, rowIndex) => (
          <div key={rowIndex} className="tech-marquee">
            <div
              className={`tech-marquee-track ${
                rowIndex === 1 ? "tech-marquee-track-reverse" : ""
              }`}
            >
              {[0, 1].map((copyIndex) => (
                <div
                  key={copyIndex}
                  className="tech-marquee-group"
                  aria-hidden={copyIndex === 1}
                >
                  {row.map(({ name, Icon }) => (
                    <div key={`${copyIndex}-${name}`} className="tech-marquee-chip">
                      <Icon size={16} aria-hidden="true" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
