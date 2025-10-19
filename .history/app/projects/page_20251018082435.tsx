"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Impor framer-motion

// --- DATA PROYEK & TESTIMONI ---
const projects = [
  // ... (data proyek Anda tetap sama)
  {
    title: "CinemaDB",
    description: "A movie search project built using the OMDb database.",
    tags: ["React", "API", "Vite"],
    image: "/movie-database-interface.jpg",
    link: "#",
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

const testimonials = [
  {
    quote:
      "Working with Aliif was an absolute pleasure. His attention to detail and creative vision transformed our project. The final result exceeded all our expectations!",
    name: "Farhan Maulana",
    title: "CEO, Tech Solutions Inc.",
    image: "/avatars/farhan.png", // Tambahkan path ke gambar avatar
  },
  {
    quote:
      "The design process was seamless and collaborative. Aliif has a unique ability to understand complex requirements and translate them into a beautiful and intuitive UI.",
    name: "Alip Zulfikar",
    title: "Product Manager, Creative Co.",
    image: "/avatars/alip.png",
  },
  {
    quote:
      "I'm impressed by the quality of the code and the modern technologies used. The application is fast, responsive, and robust. A truly professional developer.",
    name: "Deryl Ramadhan",
    title: "Lead Engineer, Innovate Startups",
    image: "/avatars/deryl.png",
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- KOMPONEN ICON YANG SUDAH DIPERBAIKI ---
// Menambahkan typing `React.SVGProps<SVGSVGElement>` untuk menghilangkan error
const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor" // Mengubah fill agar lebih solid
    stroke="currentColor"
    strokeWidth="0"
    {...props}
  >
    <path d="M14.017 21v-7.391c0-2.908.984-5.038 3.124-6.232l.81.658c-1.543.951-2.261 2.399-2.261 4.31v8.655h-1.673zm-12.017 0v-7.391c0-2.908.984-5.038 3.124-6.232l.81.658c-1.543.951-2.261 2.399-2.261 4.31v8.655h-1.673z" />
  </svg>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation (Tetap Sama) */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        {/* ... kode navigasi Anda ... */}
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

      <main>
        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link
                    href={project.link}
                    className="group block relative h-80 w-full overflow-hidden rounded-xl shadow-lg"
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-4">
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section with Animation */}
        <section
          id="testimonials"
          className="py-24 px-4 bg-muted/50 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-8 rounded-xl border border-border shadow-sm flex flex-col text-center items-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-4 border-2 border-primary/50"
                  />
                  <p className="text-foreground/80 italic flex-grow mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
