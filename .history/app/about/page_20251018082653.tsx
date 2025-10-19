"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Brush, Puzzle, Download } from "lucide-react"; // Impor ikon

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

export default function About() {
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
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Image with Decorative Frame */}
            <motion.div className="md:col-span-2 group" variants={fadeInUp}>
              <div className="relative p-4 border-2 border-primary/20 rounded-xl">
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-full blur-xl -z-10"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary/10 rounded-full blur-xl -z-10"></div>
                <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
                  <Image
                    src="/professional-portrait-young-man-holding-sign.jpg"
                    alt="Portrait of Aliif"
                    fill
                    className="object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>
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
                  Bridging Ideas and Reality Through Code and Design.
                </h1>
              </motion.div>

              <motion.p
                className="text-lg text-foreground/70 leading-relaxed"
                variants={fadeInUp}
              >
                Hello! I'm Aliif, a software engineering student driven by a
                passion for building clean, fast, and intuitive web experiences.
                My focus lies in the MERN stack, particularly with React,
                Next.js, and TypeScript, but my curiosity doesn't stop there. I
                actively explore UI/UX design and robotics, blending logic with
                creativity to craft solutions that are both functional and
                beautiful.
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
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Let's Talk
                  </Button>
                </Link>
                <a href="/path-to-your-cv.pdf" download>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
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
