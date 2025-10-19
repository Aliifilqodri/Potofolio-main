"use client";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "CinemaDB",
    description: "A movie search project built using the OMDb database.",
    tags: ["React", "API"],
    image: "/movie-database-interface.jpg",
  },
  {
    title: "Reog Ponorogo Landing Page",
    description:
      "I created a simple landing page website to showcase Reog Ponorogo culture.",
    tags: ["Web Design"],
    image: "/cultural-landing-page.jpg",
  },
  {
    title: "JobSeeker Website Design",
    description:
      "I designed a modern jobseeker website to help users explore career opportunities",
    tags: ["Figma"],
    image: "/job-portal-design.jpg",
  },
  {
    title: "Asikin Mobile Design",
    description:
      "Asikin is a mobile app design concept for street musicians and dancers to connect with their audience.",
    tags: ["Figma"],
    image: "/mobile-app-design-concept.png",
  },
];

export default function Projects() {
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

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="inline-block mb-8 p-4 border-2 border-foreground rounded">
              <p className="text-sm font-mono">Selected Works</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              WebDev | Design
            </h1>
            <p className="text-lg text-foreground/60">
              Welcome to my project showcase — a collection of what I've built,
              explored, and experimented with.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
