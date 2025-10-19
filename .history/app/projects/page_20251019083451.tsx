"use client";

import React, { useState } from "react"; // useState ditambahkan
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence ditambahkan
import { ExternalLink, ChevronDown, ChevronUp, Award } from "lucide-react"; // Ikon baru ditambahkan
import { Button } from "@/components/ui/button"; // Button diimpor

// --- DATA PROYEK ---
const projects = [
  {
    title: "Operational Issues Dashboard",
    description:
      "An integrated system to streamline operational issue reporting. Users can instantly create tickets via a Telegram bot, which are then logged and displayed on a real-time dashboard for efficient monitoring and resolution.",
    tags: ["React", "Node.js", "Telegram Bot", "API", "MongoDB"],
    image: "/port/db.png",
  },
];

// --- DATA SERTIFIKAT (Duplikat sudah dihapus) ---
const certificates = [
  {
    title: "Wordpress Development",
    issuer: "Jagoan Hosting",
    image: "/cert/jagos.png",
    link: "https://drive.google.com/file/d/1vCXDcKXIjM1plun59cgCpMbhOnaR4AKW/view?usp=sharing",
  },
  {
    title: "Ansible: Automating Application Deployment",
    issuer: "SMK Telkom Malang & StenDesk",
    image: "/cert/ap.png",
    link: "https://drive.google.com/file/d/1gtmAEhF69PR0CB5CK30v5x3BA_8kUX1f/view?usp=sharing",
  },
  {
    title: "Guide to Learn R with AI",
    issuer: "DQLab",
    image: "/cert/dq.png",
    link: "https://drive.google.com/file/d/10tMKVVpgXk9Hu_gIg3QOoYnABMFtcmnU/view?usp=sharing",
  },
  {
    title: "Website Design Competition Finalist",
    issuer: "STIKI Student Competition (SSC) XII",
    image: "/cert/st.png",
    link: "https://drive.google.com/file/d/1AjDftmcXMvvdFaDeeT9l-U6YZrby_xPM/view?usp=sharing",
  },
  // Tambahkan sertifikat ke-4 atau lebih di sini untuk melihat tombol "Show More"
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};
const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

// --- KOMPONEN KARTU PROYEK ---
const ProjectCardContent = ({ project }) => (
  <>
    <Image
      src={project.image}
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
        <p className="text-white/80 mb-4">{project.description}</p>
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
  </>
);

export default function Projects() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Aurora Dinamis */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%)",
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Navigation */}
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
              href="/testimonials"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Testimonials
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
        {/* Bagian 1: Projects Section */}
        <section id="projects" className="py-24 px-4">
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
                A curated collection of my creations, from full-stack
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
                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative h-80 w-full overflow-hidden rounded-xl shadow-lg"
                    >
                      <ProjectCardContent project={project} />
                    </Link>
                  ) : (
                    <div className="group block relative h-80 w-full overflow-hidden rounded-xl shadow-lg">
                      <ProjectCardContent project={project} />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bagian 2: Certificates Section (SUDAH DIPERBARUI) */}
        <section id="certificates" className="py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-mono uppercase text-primary tracking-widest">
                <Award size={16} /> Credentials
              </span>
              <h1 className="text-4xl md:text-6xl font-black mt-2">
                Certificates & Achievements
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                A collection of my certifications and accomplishments that
                validate my skills and expertise.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <AnimatePresence>
                {visibleCertificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
                    variants={fadeInUp}
                    layout // Menambahkan animasi layout yang halus
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow:
                        "0px 15px 30px -5px rgba(var(--primary-rgb), 0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-sm text-white/80 mb-4">
                        {cert.issuer}
                      </p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full">
                          View Certificate <ExternalLink size={16} />
                        </button>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {certificates.length > 3 && (
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  variant="outline"
                  className="group"
                >
                  {showAllCertificates ? "Show Less" : "Show More"}
                  {showAllCertificates ? (
                    <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
