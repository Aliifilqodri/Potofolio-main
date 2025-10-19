"use client";

import Link from "next/link";
import Image from "next/image";

// Data untuk proyek Anda
const projects = [
  {
    title: "CinemaDB",
    description: "A movie search project built using the OMDb database.",
    tags: ["React", "API", "Vite"],
    image: "/movie-database-interface.jpg",
    link: "#", // Tambahkan link ke proyek jika ada
  },
  {
    title: "Reog Ponorogo Landing Page",
    description:
      "I created a simple landing page website to showcase Reog Ponorogo culture.",
    tags: ["Web Design", "HTML", "CSS"],
    image: "/cultural-landing-page.jpg",
    link: "#",
  },
  {
    title: "JobSeeker Website Design",
    description:
      "I designed a modern jobseeker website to help users explore career opportunities.",
    tags: ["Figma", "UI/UX"],
    image: "/job-portal-design.jpg",
    link: "#",
  },
  {
    title: "Asikin Mobile Design",
    description:
      "Asikin is a mobile app design concept for street musicians and dancers to connect with their audience.",
    tags: ["Figma", "Mobile Design"],
    image: "/mobile-app-design-concept.png",
    link: "#",
  },
];

// Data untuk testimoni (contoh)
const testimonials = [
  {
    quote:
      "Working with Aliif was an absolute pleasure. His attention to detail and creative vision transformed our project. The final result exceeded all our expectations!",
    name: "Farhan Maulana",
    title: "CEO, Tech Solutions Inc.",
  },
  {
    quote:
      "The design process was seamless and collaborative. Aliif has a unique ability to understand complex requirements and translate them into a beautiful and intuitive user interface.",
    name: "Alip Zulfikar",
    title: "Product Manager, Creative Co.",
  },
  {
    quote:
      "I'm impressed by the quality of the code and the modern technologies used. The application is fast, responsive, and robust. A truly professional developer.",
    name: "Deryl Ramadhan",
    title: "Lead Engineer, Innovate Startups",
  },
];

// Komponen Ikon Kutip (untuk Testimoni)
const QuoteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6c0 7 4 8 8 8Z" />
    <path d="M14 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 4 8 8 8Z" />
  </svg>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Tetap Sama */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Skills & Tools
            </Link>
            <Link href="/projects" className="font-semibold text-primary">
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <main>
        <section id="projects" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <span className="text-sm font-mono uppercase text-primary tracking-widest">
                Selected Works
              </span>
              <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                My Projects Showcase
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                A curated collection of my creations, from full-stack web
                applications to modern UI/UX designs.
              </p>
            </div>

            {/* Projects Grid with Hover Effect */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link
                  href={project.link}
                  key={index}
                  className="group block relative h-80 w-full overflow-hidden rounded-xl shadow-lg"
                >
                  {/* Background Image */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Content that shows on hover */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                      {project.title}
                    </h3>
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out">
                      <p className="text-white/80 mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <span className="text-sm font-mono uppercase text-primary tracking-widest">
                Testimonials
              </span>
              <h1 className="text-4xl md:text-6xl font-black mt-2">
                What Others Say
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                Hear from colleagues and clients who have experienced my work
                firsthand.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg border border-border shadow-sm flex flex-col"
                >
                  <QuoteIcon className="text-primary w-8 h-8 mb-4" />
                  <p className="text-foreground/80 flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
