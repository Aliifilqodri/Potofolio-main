"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- BARU: Buat komponen Link yang bisa dianimasikan ---
const MotionLink = motion(Link);

// --- DATA LOGO TEKNOLOGI UNTUK SCROLL OTOMATIS ---
const techLogos = [
  { src: "/upload/awttpd.png", alt: "Wattpadd" },
  { src: "/upload/tiktok.png", alt: "Tiktok" },
  { src: "/upload/yt.webp", alt: "Youtube" },
  { src: "/photo/jsa.png", alt: "HTML CSS JS" },
  { src: "/photo/figma.png", alt: "Figma" },
  { src: "/photo/mongodb.png", alt: "MongoDB" },
  { src: "/photo/github.png", alt: "Github" },
  { src: "/photo/capcut.png", alt: "Capcut" },
  { src: "/upload/awttpd.png", alt: "Wattpadd" },
  { src: "/upload/tiktok.png", alt: "Tiktok" },
  { src: "/upload/yt.webp", alt: "Youtube" },
  { src: "/photo/jsa.png", alt: "HTML CSS JS" },
  { src: "/photo/figma.png", alt: "Figma" },
  { src: "/photo/mongodb.png", alt: "MongoDB" },
  { src: "/photo/github.png", alt: "Github" },
  { src: "/photo/capcut.png", alt: "Capcut" },
];

// --- VARIAN ANIMASI ---
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

// --- DIUBAH: Varian animasi untuk Menu DRAWER (Geser dari Kanan) ---
const mobileDrawerVariants: Variants = {
  initial: {
    x: "100%", // Mulai dari luar layar sebelah kanan
  },
  animate: {
    x: "0%", // Geser ke posisi 0
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      delayChildren: 0.2, // Tunda animasi link
      staggerChildren: 0.08, // Jeda antar link
    },
  },
  exit: {
    x: "100%", // Geser kembali ke kanan
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

// --- DIUBAH: Varian untuk link (animasi lebih dramatis) ---
const linkFadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30, // Bergerak dari 30px
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

// --- BARU: Varian untuk backdrop ---
const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// --- BARU: Komponen Ikon Hamburger Animasi Keren ---
const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  const variant = isOpen ? "open" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 }, // Sesuaikan angka 8 jika jarak garis beda
  };
  const middle = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 }, // Sesuaikan angka 8 jika jarak garis beda
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Tambahkan 'overflow-x-hidden' ke body untuk mencegah scroll horizontal saat menu terbuka
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>

          {/* --- DIUBAH: Navigasi Desktop (ganti 'md' ke 'lg') --- */}
          <div className="hidden lg:flex gap-8">
            <Link href="/" className="font-semibold text-primary">
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
            <Link
              href="/projects"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
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
              className="text-foreground hover:text-primary transition-colors duration-300"
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

          {/* --- DIUBAH: Tombol Hamburger Menu (ganti 'md' ke 'lg') --- */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {/* --- DIUBAH: Gunakan Ikon Animasi --- */}
              <AnimatedHamburgerIcon isOpen={isMenuOpen} />
            </Button>
          </div>
        </div>
      </nav>

      {/* --- DIUBAH TOTAL: Mobile Menu Drawer Keren --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* 1. Backdrop Gelap */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* 2. Panel Menu (Glassmorphism) */}
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
                className="text-2xl font-semibold text-primary"
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
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
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

      {/* Hero Section (Sudah responsif) */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-0 pb-32 md:pb-0">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              className="text-lg md:text-2xl text-foreground/70 mb-4"
              variants={fadeInUp}
            >
              Hi there! I'm Aliif,
            </motion.p>
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-9xl font-extrabold leading-none text-foreground mb-2"
              variants={fadeInUp}
            >
              Web<span className="text-primary">D</span>evelope
              <span className="text-primary">r</span>
            </motion.h1>
            <motion.h2
              className="text-3xl sm:text-5xl lg:text-7xl font-light leading-none text-transparent bg-clip-text"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "var(--foreground)",
              }}
              variants={fadeInUp}
            >
              & UI/UX Designer
              {/* VVV --- INI BAGIAN YANG DIPERBAIKI --- VVV */}
            </motion.h2>
            {/* ^^^ --- SEBELUMNYA </Motion.h2> --- ^^^ */}
            <motion.p
              className="text-lg md:text-2xl text-foreground/60 mt-6"
              variants={fadeInUp}
            >
              based in Jakarta, Indonesia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-10 justify-center"
              variants={fadeInUp}
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                >
                  See My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Infinite Scroll (Footer) */}
      <section className="absolute bottom-0 left-0 right-0 w-full py-6 bg-background border-t border-border overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          initial="animate"
          animate="animate"
        >
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center p-2 mx-3 md:p-4 md:mx-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                className="w-10 h-10 md:w-14 md:h-14 object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}