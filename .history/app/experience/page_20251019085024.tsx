"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Wrench,
  Video,
  Code,
  Globe,
  PenTool,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- DATA PENGALAMAN (TERMASUK PENDIDIKAN, PROYEK, DLL.) ---
const experiences = [
  {
    icon: <GraduationCap />,
    role: "Computer and Network Engineering Student",
    company: "Telkom Vocational High School Malang",
    duration: "2022 - 2025",
    description:
      "Specialized in Computer and Network Engineering (TKJ), focusing on system configuration, network infrastructure, and IT solutions. Graduated in 2025 with hands-on experience in technology and innovation.",
    tags: ["Networking", "IT Infrastructure", "Linux", "Hardware", "Problem Solving"],
  },
  {
    icon: <Briefcase />,
    role: "UI/UX Designer (3rd Place Winner)",
    company: "Team Project - AISCOMP 2024",
    duration: "2024",
    description:
      "As a key member of 'Team Asikin', designed the award-winning UI/UX for a mobile application. My responsibilities focused on prototyping, usability, and visual storytelling using Figma to create an impactful user experience.",
    tags: ["Figma", "UI Design", "Prototyping", "User Research", "Competition"],
    image: "/photo/aiscomp-winner.png", // Path ke foto/sertifikat yang akan ditampilkan
  },
  {
    icon: <Video />,
    role: "Content Creator",
    company: "TikTok (15K Followers • 1M+ Likes)",
    duration: "Active",
    description:
      "Creating engaging and high-energy TikTok content that celebrates Tokusatsu, Anime, and Drama culture. I blend storytelling, humor, and passion to entertain and connect with a growing global audience.",
    tags: ["Tokusatsu", "Anime", "Storytelling", "Video Editing"],
  },
  {
    icon: <Code />,
    role: "Full-Stack Developer",
    company: "Personal Projects",
    duration: "2023 - Present",
    description:
      "Developing dynamic web applications using React, Next.js, and Node.js. Experimenting with databases, authentication systems, and modern UI frameworks to build functional digital solutions.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  // Tambahkan pengalaman lain di sini
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

// --- KOMPONEN UNTUK SETIAP ITEM DI TIMELINE (DENGAN FITUR INTERAKTIF) ---
const ExperienceItem = ({ item, index }) => {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);
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
        <div className="relative bg-muted/50 border border-border p-6 rounded-lg shadow-sm backdrop-blur-sm group-hover:border-primary/50 transition-colors duration-300 overflow-hidden">
          <p className="text-sm text-foreground/60 mb-1">{item.duration}</p>
          <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
          <p className="text-md font-semibold text-foreground/80 mb-3">{item.company}</p>
          <p className="text-foreground/70 mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* --- FITUR FOTO INTERAKTIF DITAMBAHKAN DI SINI --- */}
          {item.image && (
            <>
              <motion.div
                className="absolute top-0 right-0 h-full w-full sm:w-2/5 bg-black"
                initial={{ x: "100%" }}
                animate={{ x: isPhotoVisible ? "60%" : "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <Image src={item.image} alt={`${item.role} at ${item.company}`} fill className="object-cover opacity-70"/>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              </motion.div>

              <motion.button
                onClick={() => setIsPhotoVisible(!isPhotoVisible)}
                className="absolute top-1/2 -translate-y-1/2 right-0 z-10 flex items-center justify-center bg-primary text-primary-foreground py-4 px-2 rounded-l-lg shadow-lg"
                animate={{ x: isPhotoVisible ? "-100%" : 0, right: isPhotoVisible ? "40%" : "0px" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="font-bold uppercase text-sm" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  Lihat
                </span>
                <AnimatePresence mode="wait">
                  {isPhotoVisible ? (
                    <motion.div key="right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <ChevronRight className="w-5 h-5 mt-2" />
                    </motion.div>
                  ) : (
                    <motion.div key="left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <ChevronLeft className="w-5 h-5 mt-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </>
          )}
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
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">About Me</Link>
            <Link href="/skills" className="text-foreground hover:text-primary transition-colors duration-300">Skills & Tools</Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</Link>
            <Link href="/experience" className="font-semibold text-primary">Experience</Link>
            <Link href="/testimonials" className="text-foreground hover:text-foreground/70 transition">Testimonials</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact Me</Link>
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
              My Experience
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
              A timeline of my professional growth, key projects, and educational milestones.
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