"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// --- DATA LOGO TEKNOLOGI UNTUK SCROLL OTOMATIS ---
const techLogos = [
  { src: "/upload/awttpd.png", alt: "Wattpadd" },
  { src: "/upload/tiktok.png", alt: "Tiktok" },
  { src: "/upload/yt.webp", alt: "Youtube" },
  { src: "/tech-logos/typescript.png", alt: "TypeScript" },
  { src: "/tech-logos/figma.png", alt: "Figma" },
  { src: "/tech-logos/mongodb.png", alt: "MongoDB" },
  { src: "/tech-logos/nodejs.png", alt: "Node.js" },
  { src: "/tech-logos/expressjs.png", alt: "Express.js" },
  { src: "/tech-logos/prisma.png", alt: "Prisma" },
  { src: "/tech-logos/javascript.png", alt: "JavaScript" },
  // Duplicate logos for seamless infinite scroll effect
  { src: "/upload/awttpd.png", alt: "Wattpadd" },
  { src: "/upload/tiktok.png", alt: "Tiktok" },
  { src: "/upload/yt.webp", alt: "Youtube" },
  { src: "/tech-logos/typescript.png", alt: "TypeScript" },
  { src: "/tech-logos/figma.png", alt: "Figma" },
  { src: "/tech-logos/mongodb.png", alt: "MongoDB" },
  { src: "/tech-logos/nodejs.png", alt: "Node.js" },
  { src: "/tech-logos/expressjs.png", alt: "Express.js" },
  { src: "/tech-logos/prisma.png", alt: "Prisma" },
  { src: "/tech-logos/javascript.png", alt: "JavaScript" },
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animasi untuk scroll horizontal tanpa batas
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"], // Scroll dari 0% ke -100% (lebar total logo)
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Durasi untuk satu putaran penuh (semakin besar semakin lambat)
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 pt-16 md:pt-0 pb-32 md:pb-0">
        {/* Background Image of Aliif */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
          <Image
            src="/my-profile-hero.png" // Pastikan gambar Anda tanpa background (PNG)
            alt="Aliif - UI/UX Designer & UI/UX Designer"
            width={700} // Sesuaikan lebar gambar
            height={700} // Sesuaikan tinggi gambar
            className="object-contain"
            priority // Agar di-load lebih awal
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              className="text-xl md:text-2xl text-foreground/70 mb-4"
              variants={fadeInUp}
            >
              Hi there! I'm Aliif,
            </motion.p>
            <motion.h1
              className="text-7xl md:text-9xl font-extrabold leading-none text-foreground mb-2"
              variants={fadeInUp}
            >
              Web<span className="text-primary">D</span>evelope
              <span className="text-primary">r</span>
            </motion.h1>
            <motion.h2
              className="text-5xl md:text-7xl font-light leading-none text-transparent bg-clip-text"
              style={{
                WebkitTextStrokeWidth: "2px", // Lebar outline
                WebkitTextStrokeColor: "var(--foreground)", // Warna outline
              }}
              variants={fadeInUp}
            >
              & UI/UX Designer
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-foreground/60 mt-6"
              variants={fadeInUp}
            >
              based in Jakarta, Indonesia.
            </motion.p>

            <motion.div
              className="flex gap-4 pt-10 justify-center"
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

      {/* Tech Stack Infinite Scroll */}
      <section className="absolute bottom-0 left-0 right-0 w-full py-6 bg-background border-t border-border overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          initial="animate" // Langsung mulai animasi saat mount
          animate="animate"
        >
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center p-4 mx-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60} // Sesuaikan ukuran logo
                height={60}
                className="object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
