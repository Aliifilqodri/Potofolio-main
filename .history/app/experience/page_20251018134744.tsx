"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Wrench } from "lucide-react"; // Ikon keren!

// --- STRUKTUR DATA PENGALAMAN BARU ---
// Ganti placeholder ini dengan pengalaman Anda yang sebenarnya
const experiences = [
  {
    icon: <GraduationCap />,
    role: "Software Engineering Student",
    company: "Politeknik Negeri Jakarta",
    duration: "2022 - Present",
    description:
      "Fokus pada pengembangan web full-stack, desain UI/UX, dan robotika untuk menciptakan solusi digital yang fungsional dan bermakna.",
    tags: ["React", "Next.js", "TypeScript", "Figma", "Node.js"],
  },
  {
    icon: <Briefcase />,
    role: "UI/UX Designer",
    company: "Freelance Project",
    duration: "2023",
    description:
      "Merancang antarmuka yang intuitif dan pengalaman pengguna yang menarik untuk aplikasi mobile 'Asikin' menggunakan prototyping di Figma.",
    tags: ["Figma", "UI Design", "Prototyping", "User Research"],
  },
  {
    icon: <Video />,
    role: "Content Creator",
    company: "TikTok (15K Followers • 1M+ Likes)",
    duration: "Active",
    description:
      "Creating engaging and high-energy TikTok content that celebrates Tokusatsu, Anime, and Drama culture. I blend storytelling, humor, and passion to entertain and connect with a growing global audience who share the same love for Japanese pop culture.",
    tags: ["Tokusatsu", "Anime", "Drama", "Storytelling", "Video Editing"],
  },
  // Tambahkan pengalaman lain di sini
];


// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

// Komponen untuk setiap entri di timeline
const ExperienceItem = ({ item, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <motion.div
      className="flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
      initial="initial"
      whileInView="animate"
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Kartu Konten */}
      <div className={`w-full md:w-5/12 ${isOdd ? "md:pl-8" : "md:pr-8"}`}>
        <div className="bg-muted/50 border border-border p-6 rounded-lg shadow-sm backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-300">
          <p className="text-sm text-foreground/60 mb-1">{item.duration}</p>
          <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
          <p className="text-md font-semibold text-foreground/80 mb-3">
            {item.company}
          </p>
          <p className="text-foreground/70 mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Titik & Ikon di Timeline */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-background items-center justify-center rounded-full border-2 border-border group-hover:border-primary transition-colors duration-300">
        <div className="text-primary">{item.icon}</div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
            <Link href="/experience" className="font-semibold text-primary">
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

      {/* Experience Section */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-sm font-mono uppercase text-primary tracking-widest">
              My Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2">
              Work & Education
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
              A timeline of my professional growth, key projects, and
              educational milestones.
            </p>
          </motion.div>

          {/* Timeline */}
          <div ref={ref} className="relative flex flex-col gap-y-12">
            {/* Animated Line */}
            <motion.div
              className="absolute left-4 md:left-1/2 w-1 -translate-x-1/2 top-0 bottom-0 bg-border origin-top"
              style={{ scaleY }}
            />

            {/* Timeline Items */}
            {experiences.map((item, index) => (
              <ExperienceItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
