"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Video,
  Code,
  ChevronLeft,
  ChevronRight,
  Award,
  Users, // <-- Icon baru untuk peran multi-fungsi
} from "lucide-react";

// --- KOMPONEN LINK ANIMASI ---
const MotionLink = motion(Link);

// --- TIPE DATA UNTUK PENGALAMAN ---
interface ExperienceData {
  icon: React.ReactNode;
  role: string;
  company: string;
  duration: string;
  description: string;
  tags: string[];
  image?: string;
}

// --- DATA PENGALAMAN (TERMASUK PENDIDIKAN, PROYEK, DLL.) ---
const experiences: ExperienceData[] = [
  // Entri Pendidikan (Tetap)
  {
    icon: <GraduationCap />,
    role: "Computer and Network Engineering Student",
    company: "Telkom Vocational High School Malang",
    duration: "2022 - 2025",
    description:
      "Specialized in Computer and Network Engineering (TKJ), focusing on system configuration, network infrastructure, and IT solutions. Graduated in 2025 with hands-on experience in technology and innovation.",
    tags: [
      "Networking",
      "IT Infrastructure",
      "Linux",
      "Hardware",
      "Problem Solving",
    ],
  },
  // Lomba Redesign Web
  {
    icon: <Award />,
    role: "Website Redesign Competition Participant (Top 10)",
    company: "Sticky Malang - Government Website Theme",
    duration: "2024",
    description:
      "Participated in a government website redesign competition held by Sticky Malang, achieving a top 10 position. Focused on improving user interface and experience for public service websites using Figma.",
    tags: ["Web Redesign", "UI Design", "UX Design", "Competition", "Figma", "Government"],
    image: "/photo/123.jpg",
  },
  // Entri UI/UX AISCOMP
  {
    icon: <Briefcase />,
    role: "UI/UX Designer (3rd Place Winner)",
    company: "Team Project - AISCOMP 2024",
    duration: "2024",
    description:
      "As part of 'Team Asikin', developed the award-winning submission for a web redesign competition. I utilized Figma to overhaul the user experience, focusing on modern UI principles, interactive prototyping, and improved usability.",
    tags: ["Figma", "UI Design", "Prototyping", "User Research", "Competition"],
  },
  // --- BARU: Magang di Indobot Academy ---
  {
    icon: <Users />, // Menggunakan ikon Users untuk peran multi-fungsi
    role: "Intern (Creative Design, KOL, Ops, Finance, HR)",
    company: "Indobot Academy",
    duration: "November 2024 - Januari 2025",
    description:
      "Gained diverse operational experience through an internship program, contributing across multiple departments including Creative Design, Key Opinion Leader (KOL) management support, Operations System assistance, Finance administration, and Human Resources tasks.",
    tags: [
      "Internship",
      "Creative Design",
      "KOL Management",
      "Operations",
      "Finance Admin",
      "HR Support",
      "Multi-tasking",
    ],
    // Tidak ada gambar untuk entri ini
  },
  // Pengalaman di Telkom Akses
  {
    icon: <Briefcase />,
    role: "IT Support & Project Based Developer",
    company: "Telkom Akses Indonesia, Jakarta",
    duration: "2025 - Sekarang",
    description:
      "Providing IT support and contributing to project-based development initiatives at Telkom Akses. Gained practical experience in troubleshooting, system maintenance, and collaborative software development environments within the telecommunications sector.",
    tags: [
      "IT Support",
      "Project Development",
      "Troubleshooting",
      "System Maintenance",
      "Collaboration",
      "Telkom Akses",
    ],
  },
  // Entri Content Creator (Tetap)
  {
    icon: <Video />,
    role: "Content Creator",
    company: "TikTok (15K Followers • 1M+ Likes)",
    duration: "Active",
    description:
      "Creating engaging and high-energy TikTok content that celebrates Tokusatsu, Anime, and Drama culture. I blend storytelling, humor, and passion to entertain and connect with a growing global audience.",
    tags: ["Tokusatsu", "Anime", "Storytelling", "Video Editing"],
  },
  // Entri Graphic Designer (Tetap)
  {
    icon: <Code />,
    role: "Junior Graphic Designer",
    company: "Personal Projects",
    duration: "2023 - Present",
    description:
      "Creating custom graphic assets, including logos, social media posts, and branding materials for various clients. Focused on delivering quality design that meets client specifications and deadlines.",
    tags: ["Figma", "Adobe", "Canva"],
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

// --- VARIAN UNTUK MENU BARU ---
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

// --- KOMPONEN IKON HAMBURGER ANIMASI ---
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

// --- PROPS UNTUK KOMPONEN ExperienceItem ---
interface ExperienceItemProps {
  item: ExperienceData;
  index: number;
}

// --- KOMPONEN UNTUK SETIAP ITEM DI TIMELINE ---
const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, index }) => {
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

          {/* --- FITUR FOTO INTERAKTIF --- */}
          {item.image && (
            <>
              {/* Panel Foto */}
              <motion.div
                className="absolute top-0 right-0 h-full w-full bg-black z-10"
                initial={{ x: "100%" }}
                animate={{ x: isPhotoVisible ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <Image
                  src={item.image}
                  alt={`${item.role} at ${item.company}`}
                  fill
                  className="object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              </motion.div>

              {/* Tombol "Lihat" */}
              <motion.button
                onClick={() => setIsPhotoVisible(!isPhotoVisible)}
                className="absolute top-1/2 -translate-y-1/2 right-0 z-20 flex items-center justify-center bg-primary text-primary-foreground py-4 px-2 rounded-l-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span
                  className="font-bold uppercase text-sm"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Lihat
                </span>
                <AnimatePresence mode="wait">
                  {isPhotoVisible ? (
                    <motion.div
                      key="right"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ChevronRight className="w-5 h-5 mt-2" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
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

// --- HALAMAN UTAMA EXPERIENCE ---
export default function Experience() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigasi */}
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

      {/* Menu Drawer Mobile */}
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
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Projects
              </MotionLink>
              <MotionLink
                href="/experience"
                className="text-2xl font-semibold text-primary" // Highlight halaman ini
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
              A timeline of my professional growth, key projects, and educational
              milestones.
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