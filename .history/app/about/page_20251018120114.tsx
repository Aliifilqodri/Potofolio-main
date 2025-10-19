"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code, Brush, Puzzle, Download } from "lucide-react";
import React from "react";

// --- DATA LOGO (TETAP SAMA) ---
const techLogos = [
  { src: "/figma.png", alt: "Figma", size: 40, duration: 15 },
  { src: "/tiktok.png", alt: "Tiktok", size: 35, duration: 18 },
  {
    src: "/tech-logos/tailwind.png",
    alt: "Tailwind CSS",
    size: 45,
    duration: 20,
  },
  {
    src: "/tech-logos/typescript.png",
    alt: "TypeScript",
    size: 38,
    duration: 16,
  },
  { src: "/tech-logos/figma.png", alt: "Figma", size: 42, duration: 17 },
  {
    src: "/tech-logos/mongodb.png",
    alt: "MongoDB",
    size: 30,
    duration: 19,
    reverse: true,
  },
  { src: "/tech-logos/nodejs.png", alt: "Node.js", size: 40, duration: 14 },
];

// --- VARIAN ANIMASI BARU ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// Varian untuk animasi teks mengetik
const typingContainer = {
  animate: { transition: { staggerChildren: 0.025 } },
};
const typingChar = {
  initial: { opacity: 0, y: "20px" },
  animate: { opacity: 1, y: "0px" },
};

export default function About() {
  // --- LOGIC UNTUK EFEK PARALLAX 3D ---
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [10, -10]); // Miring atas-bawah
  const rotateY = useTransform(x, [-150, 150], [-10, 10]); // Miring kiri-kanan

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Update nilai x dan y berdasarkan posisi mouse di dalam elemen
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    // Reset ke posisi awal saat mouse keluar
    x.set(0);
    y.set(0);
  };

  const headline = "Bridging Ideas and Reality Through Code and Design.";

  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Aurora Dinamis */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-background 
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] 
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      ></div>
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        {/* ... (kode navigasi tetap sama) ... */}
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
            <Link href="/about" className="font-semibold text-primary">
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
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* GAMBAR DENGAN EFEK PARALLAX 3D */}
            <motion.div
              ref={ref}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="md:col-span-2 group relative"
              variants={fadeInUp}
            >
              <div
                style={{
                  transform: "translateZ(8px)",
                  transformStyle: "preserve-3d",
                }}
                className="relative p-4 border-2 border-primary/20 rounded-xl"
              >
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-full blur-xl -z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-xl -z-10"></div>
                <div
                  style={{ transform: "translateZ(30px)" }}
                  className="relative w-full h-[450px] rounded-lg overflow-hidden"
                >
                  <Image
                    src="/professional-portrait-young-man-holding-sign.jpg"
                    alt="Portrait of Aliif"
                    fill
                    className="object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* ORBIT LOGO INTERAKTIF */}
              <motion.div
                style={{
                  transform: "translateZ(50px)",
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {techLogos.map((logo, index) => {
                  const angle = (index / techLogos.length) * 2 * Math.PI;
                  const radius = 220; // Radius orbit
                  const xPos = Math.cos(angle) * radius;
                  const yPos = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: logo.size,
                        height: logo.size,
                        x: xPos - logo.size / 2,
                        y: yPos - logo.size / 2,
                      }}
                      animate={{ rotate: logo.reverse ? -360 : 360 }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: logo.duration,
                      }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.size}
                        height={logo.size}
                        className="object-contain"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="md:col-span-3 space-y-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <span className="text-sm font-mono uppercase text-primary tracking-widest">
                  Who I Am
                </span>
                <motion.h1
                  className="text-4xl md:text-5xl font-black mt-2 text-balance"
                  variants={typingContainer}
                  initial="initial"
                  animate="animate"
                >
                  {Array.from(headline).map((char, index) => (
                    <motion.span key={index} variants={typingChar}>
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg text-foreground/70 leading-relaxed"
                variants={fadeInUp}
              >
                Hello! I'm Aliif, a content creator and storyteller passionate
                about crafting engaging narratives and digital experiences. I
                specialize in content creation for TikTok, writing compelling
                stories, and developing intuitive back-end systems. With a
                strong foundation in UI/UX design and web development, I blend
                creativity and technology to bring ideas to life through
                impactful visuals and meaningful interactions
              </motion.p>

              {/* ... (My Philosophy Section tetap sama) ... */}
              <motion.div className="space-y-6 pt-4" variants={fadeInUp}>
                {/* ... (Kode untuk Clean Code, User-Centric Design, Continuous Learning) ... */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Clean & Efficient Code
                    </h4>
                    <p className="text-foreground/60">
                      Writing scalable and maintainable code is my priority. I
                      believe in building robust backends and dynamic frontends
                      that stand the test of time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                    <Brush className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">User-Centric Design</h4>
                    <p className="text-foreground/60">
                      Technology should serve people. I strive to create
                      interfaces that are not just visually appealing but also
                      accessible and easy to use.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                    <Puzzle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Continuous Learning</h4>
                    <p className="text-foreground/60">
                      The tech world evolves rapidly, and so do I. I'm always
                      eager to learn new technologies and methodologies to solve
                      complex problems.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-6"
                variants={fadeInUp}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                    >
                      Let's Talk
                    </Button>
                  </motion.div>
                </Link>
                <a href="/Aliif-cv.pdf" download>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
