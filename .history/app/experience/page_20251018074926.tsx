"use client";

import Link from "next/link";

export default function Experience() {
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

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-12">Experience</h1>

          <div className="space-y-12">
            <div className="border-l-2 border-foreground pl-8 pb-8">
              <h3 className="text-2xl font-bold mb-2">
                Software Engineering Student
              </h3>
              <p className="text-foreground/60 mb-4">
                Currently focused on web development and UI/UX design
              </p>
              <p className="text-foreground/70">
                Building real projects with React, Next.js, and TypeScript.
                Exploring the intersection of code and design to create
                meaningful digital experiences.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-8 pb-8">
              <h3 className="text-2xl font-bold mb-2">UI/UX Designer</h3>
              <p className="text-foreground/60 mb-4">
                Designing user-centered digital products
              </p>
              <p className="text-foreground/70">
                Creating intuitive interfaces and meaningful user experiences
                through thoughtful design and prototyping in Figma.
              </p>
            </div>

            <div className="border-l-2 border-foreground pl-8">
              <h3 className="text-2xl font-bold mb-2">Robotics Enthusiast</h3>
              <p className="text-foreground/60 mb-4">
                Blending hardware and software
              </p>
              <p className="text-foreground/70">
                Exploring the intersection of robotics and programming to solve
                real-world problems through hardware and software integration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
