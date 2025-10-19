"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// --- DATA SKILL BARU DENGAN KATEGORI & PATH SVG ---
const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", icon: "/skills/html.svg" },
      { name: "CSS", icon: "/skills/css.svg" },
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/skills/tailwind.svg" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "Prisma", icon: "/skills/prisma.svg" },
    ],
  },
  {
    category: "Design & Other Tools",
    skills: [
      { name: "Figma", icon: "/skills/figma.svg" },
      { name: "LabVIEW", icon: "/skills/labview.svg" },
      // Tambahkan tool lain jika ada
    ],
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Skills() {
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
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              About Me
            </Link>
            <Link href="/skills" className="font-semibold text-primary">
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

      {/* Skills Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-sm font-mono uppercase text-primary tracking-widest">
              My Arsenal
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Technologies & Tools
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
              The stack I use to build robust, beautiful, and user-friendly
              digital experiences from scratch.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                  {category.category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="group relative bg-muted/50 p-6 rounded-lg border border-border flex flex-col items-center justify-center gap-4 cursor-pointer"
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                        boxShadow:
                          "0px 10px 30px -5px rgba(var(--primary-rgb), 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain h-12 w-12 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                      <span className="font-semibold text-foreground/80">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
