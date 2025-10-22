"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- 1. TAMBAHKAN KOMPONEN LINK ANIMASI ---
const MotionLink = motion(Link);

// --- INTERFACE UNTUK DATA ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  link: string;
}

// --- DATA PROYEK ---
const projects: Project[] = [
  {
    title: "Operational Issues Dashboard",
    description:
      "An integrated system to streamline operational issue reporting. Users can instantly create tickets via a Telegram bot, which are then logged and displayed on a real-time dashboard for efficient monitoring and resolution.",
    tags: ["React", "Node.js", "Telegram Bot", "API", "MongoDB"],
    image: "/port/db.png",
  },
];

// --- DATA SERTIFIKAT ---
const certificates: Certificate[] = [
  {
    title: "Wordpress Development",
    issuer: "Jagoan Hosting",
    image: "/cert/jagos.png",
    link: "https://drive.google.com/file/d/1vCXDcKXIjM1plun59cgCpMbhOnaR4AKW/view?usp=sharing",
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
  {
    title: "Ansible: Automating Application Deployment",
    issuer: "SMK Telkom Malang & StenDesk",
    image: "/cert/ap.png",
    link: "https://drive.google.com/file/d/1gtmAEhF69PR0CB5CK30v5x3BA_8kUX1f/view?usp=sharing",
  },
  {
    title: "3rd Place Winner, UI/UX Competition",
    issuer: "AISCOMP 2024 - Telkom University",
    image: "/cert/aiscomp.png",
    link: "https://drive.google.com/file/d/1XeQgCDaKwvEBRrICmWEwY01jrele8JyJ/view?usp=sharing",
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// --- 2. TAMBAHKAN SEMUA VARIAN UNTUK MENU BARU ---
const mobileDrawerVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const linkFadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// --- 3. TAMBAHKAN KOMPONEN IKON HAMBURGER ANIMASI ---
const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  const variant = isOpen ? "open" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 },
  };
  const middle = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  };

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={variant}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={top}
      />
      <motion.path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={middle}
      />
      <motion.path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={bottom}
      />
    </motion.svg>
  );
};

// --- KOMPONEN KARTU PROYEK ---
const ProjectCardContent = ({ project }: { project: Project }) => (
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
  // --- 4. TAMBAHKAN STATE & HANDLER UNTUK MENU ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Background efek */}
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

      {/* --- 5. GANTI BLOK <nav> LAMA DENGAN YANG BARU --- */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>

          {/* Navigasi Desktop (breakpoint 'lg') */}
          <div className="hidden lg:flex gap-8">
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
              className="text-foreground hover:text-primary transition-colors duration-300" // Perbaiki hover
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

          {/* Tombol Hamburger Menu (tampil di bawah 'lg') */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <AnimatedHamburgerIcon isOpen={isMenuOpen} />
            </Button>
          </div>
        </div>
      </nav>

      {/* --- 6. TAMBAHKAN BLOK MENU DRAWER DI SINI --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Gelap */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* Panel Menu (Glassmorphism) */}
            <motion.div
              key="drawer"
              variants={mobileDrawerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background/80 backdrop-blur-lg flex flex-col items-center justify-center gap-10 lg:hidden"
            >
              <MotionLink
                href="/"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Home
              </MotionLink>
              <MotionLink
                href="/about"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                About Me
              </MotionLink>
              <MotionLink
                href="/skills"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Skills & Tools
              </MotionLink>
              <MotionLink
                href="/projects"
                className="text-2xl font-semibold text-primary" // Highlight halaman ini
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Projects
              </MotionLink>
              <MotionLink
                href="/experience"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Experience
              </MotionLink>
              <MotionLink
                href="/testimonials"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Testimonials
              </MotionLink>
              <MotionLink
                href="/contact"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Contact Me
              </MotionLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        {/* --- Projects Section --- */}
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

        {/* --- Certificates Section --- */}
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
                    layout
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