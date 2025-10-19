"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Brush, Puzzle, Download } from "lucide-react";
import { useRef } from "react";

// --- DATA LOGO BARU UNTUK EFEK MENGAMBANG ---
const floatingLogos = [
  {
    src: "/tech-logos/react.png",
    alt: "React",
    className: "w-16 h-16 top-[10%] left-[15%]",
  },
  {
    src: "/tech-logos/nextjs.png",
    alt: "Next.js",
    className: "w-12 h-12 top-[20%] right-[10%]",
  },
  {
    src: "/tech-logos/tailwind.png",
    alt: "Tailwind CSS",
    className: "w-20 h-20 bottom-[15%] left-[20%]",
  },
  {
    src: "/tech-logos/typescript.png",
    alt: "TypeScript",
    className: "w-14 h-14 top-[60%] left-[5%]",
  },
  {
    src: "/tech-logos/figma.png",
    alt: "Figma",
    className: "w-16 h-16 bottom-[10%] right-[15%]",
  },
  {
    src: "/tech-logos/mongodb.png",
    alt: "MongoDB",
    className: "w-10 h-10 top-[40%] right-[25%]",
  },
  {
    src: "/tech-logos/nodejs.png",
    alt: "Node.js",
    className: "w-14 h-14 top-[75%] right-[10%]",
  },
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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animasi untuk logo mengambang
const floatingAnim = (duration = 5, delay = 0) => ({
  animate: {
    y: ["0%", "-5%", "0%"], // Gerakan naik turun
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Efek parallax: gambar akan bergerak ke atas lebih lambat saat scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-background text-foreground">
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
      <section ref={ref} className="py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* The 3D Scene */}
            <motion.div
              className="md:col-span-2 relative h-[500px]"
              variants={fadeInUp}
            >
              {/* Floating Logos in the background */}
              {floatingLogos.map((logo, index) => (
                <motion.div
                  key={logo.alt}
                  className={`absolute z-10 ${logo.className}`}
                  variants={floatingAnim(5 + index, index * 0.5)} // Durasi & delay bervariasi
                  animate="animate"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain opacity-50"
                  />
                </motion.div>
              ))}

              {/* Your Profile Picture in the foreground with Parallax */}
              <motion.div style={{ y }} className="relative z-20 w-full h-full">
                <Image
                  src="/Aliif-profile-transparent.png" // PASTIKAN GAMBAR INI ADA & TRANSPARAN
                  alt="Portrait of Aliif"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
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
                <h1 className="text-4xl md:text-5xl font-black mt-2 text-balance">
                  Crafting Digital Experiences Where Code Meets Creativity.
                </h1>
              </motion.div>

              <motion.p
                className="text-lg text-foreground/70 leading-relaxed"
                variants={fadeInUp}
              >
                Hello! I'm Aliif, a software engineering student with a deep
                passion for building clean, fast, and intuitive web
                applications. My journey is fueled by a constant curiosity that
                pushes me to blend robust backend logic with elegant frontend
                design, primarily using the MERN stack.
              </motion.p>

              {/* My Philosophy Section */}
              <motion.div className="space-y-6 pt-4" variants={fadeInUp}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Clean & Efficient Code
                    </h4>
                    <p className="text-foreground/60">
                      I build scalable and maintainable applications, believing
                      that great software is built on a foundation of clean
                      code.
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
                      I strive to create interfaces that are not just visually
                      appealing but are also accessible, intuitive, and a joy to
                      use.
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
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Let's Talk
                  </Button>
                </Link>
                <a href="/Aliif-cv.pdf" download>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
