"use client";

import Link from "next/link";

const skills = [
  { name: "Next.js", icon: "▲" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Node.js", icon: "⬢" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Figma", icon: "🎨" },
  { name: "Express.js", icon: "⚡" },
  { name: "Prisma", icon: "🔷" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML", icon: "🏷️" },
  { name: "CSS", icon: "🎨" },
  { name: "LabVIEW", icon: "🔬" },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-sm">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-foreground/70 transition"
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Skills & Tools
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-8 p-4 border-2 border-white rounded">
              <p className="text-sm font-mono">Tech Stack</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-balance mb-8">
              Tools and technologies I work with to build meaningful digital
              experiences
            </h1>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white text-black p-4 rounded-lg flex items-center justify-center gap-3 font-semibold hover:bg-gray-100 transition"
              >
                <span className="text-xl">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
