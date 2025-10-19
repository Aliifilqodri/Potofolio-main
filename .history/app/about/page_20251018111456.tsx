"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { PenSquare, Users, Film, Download } from "lucide-react"; // Ikon baru yang relevan
import React, { useEffect, useRef } from "react";

// --- DATA LOGO BARU: SESUAI DENGAN IDENTITAS CREATOR & DEVELOPER ---
const techLogos = [
  { src: "/tech-logos/tiktok.png", alt: "TikTok", size: 40, duration: 15 },
  { src: "/tech-logos/nextjs.png", alt: "Next.js", size: 38, duration: 18 },
  { src: "/tech-logos/figma.png", alt: "Figma", size: 35, duration: 20 },
  { src: "/tech-logos/notion.png", alt: "Notion", size: 42, duration: 16 },
  { src: "/tech-logos/react.png", alt: "React", size: 40, duration: 17 },
  { src: "/tech-logos/mongodb.png", alt: "MongoDB", size: 32, duration: 19, reverse: true },
  { src: "/tech-logos/nodejs.png", alt: "Node.js", size: 40, duration: 14 },
];

// --- DATA FILOSOFI BARU YANG MENCERMINKAN STORYTELLER & CREATOR ---
const philosophies = [
  {
    icon: <Film className="w-6 h-6"/>,
    title: "Creative Storytelling",
    description: "Saya percaya setiap brand memiliki cerita. Saya mengubah ide-ide kompleks menjadi narasi yang menarik dan konten yang beresonansi dengan audiens."
  },
  {
    icon: <Users className="w-6 h-6"/>,
    title: "Audience-First Design",
    description: "Baik dalam UI/UX maupun konten, fokus saya selalu pada audiens. Saya merancang pengalaman yang intuitif, mudah diakses, dan meninggalkan kesan positif."
  },
  {
    icon: <PenSquare className="w-6 h-6"/>,
    title: "Technical Craftsmanship",
    description: "Di balik setiap cerita yang hebat, ada eksekusi yang solid. Saya membangun sistem back-end yang andal dan antarmuka yang efisien untuk mendukung visi kreatif."
  }
];

// --- DATA STATISTIK UNTUK ANIMATED COUNTER ---
const stats = [
  { value: 15, label: "Projects Completed" },
  { value: 2, label: "Years of Experience" },
  { value: 50, label: "Stories Written" },
]

// --- KOMPONEN BARU: ANIMATED COUNTER ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useSpring(0, { duration: 2500, stiffness: 100, damping: 30 });
  const display = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return <span ref={ref}>{display}</span>;
};

// --- VARIAN ANIMASI ---
const fadeInUp = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },};
const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } },};
const typingContainer = { animate: { transition: { staggerChildren: 0.03 } },};
const typingChar = { initial: { opacity: 0, y: "20px" }, animate: { opacity: 1, y: "0px" },};

export default function About() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const headline = "Crafting Narratives, Content, and Code.";

  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* ... (Latar Belakang Aurora tetap sama) ... */}
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
       <motion.div className="absolute inset-0 -z-20" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent_25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent_25%)',}} animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0],}} transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse'}}/>

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          {/* ... (kode navigasi tetap sama, pastikan link /about aktif) ... */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Aliif<span className="text-primary text-3xl">.</span>
            </Link>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
              <Link href="/about" className="font-semibold text-primary">About Me</Link>
              <Link href="/skills" className="text-foreground hover:text-primary transition-colors duration-300">Skills & Tools</Link>
              <Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</Link>
              <Link href="/experience" className="text-foreground hover:text-primary transition-colors duration-300">Experience</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact Me</Link>
            </div>
           </div>
      </nav>

      <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center"
            initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.3 }}
          >
            {/* GAMBAR DENGAN EFEK PARALLAX 3D & GLOW HOVER */}
            <motion.div
              ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="md:col-span-2 group relative" variants={fadeInUp}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              <div style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }} className="relative p-4 border border-border group-hover:border-primary/30 transition-colors duration-300 rounded-xl bg-background/50 backdrop-blur-sm">
                 <div style={{ transform: "translateZ(30px)" }} className="relative w-full h-[450px] rounded-lg overflow-hidden">
                    <Image src="/professional-portrait-young-man-holding-sign.jpg" alt="Portrait of Aliif" fill className="object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-105"/>
                 </div>
              </div>

              <motion.div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }} className="absolute inset-0 w-full h-full" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                {techLogos.map((logo, index) => {
                  const angle = (index / techLogos.length) * 2 * Math.PI;
                  const radius = 220;
                  const xPos = Math.cos(angle) * radius;
                  const yPos = Math.sin(angle) * radius;
                  return (
                    <motion.div key={index} className="absolute top-1/2 left-1/2" style={{ width: logo.size, height: logo.size, x: xPos - logo.size / 2, y: yPos - logo.size / 2, }} animate={{ rotate: logo.reverse ? -360 : 360 }} transition={{ repeat: Infinity, ease: "linear", duration: logo.duration, }}>
                      <Image src={logo.src} alt={logo.alt} width={logo.size} height={logo.size} className="object-contain drop-shadow-lg"/>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div className="md:col-span-3 space-y-8" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <span className="text-sm font-mono uppercase text-primary tracking-widest">Who I Am</span>
                <motion.h1 className="text-4xl md:text-5xl font-black mt-2 text-balance" variants={typingContainer} initial="initial" animate="animate">
                  {Array.from(headline).map((char, index) => (<motion.span key={index} variants={typingChar}>{char === " " ? "\u00A0" : char}</motion.span>))}
                </motion.h1>
              </motion.div>

              <motion.p className="text-lg text-foreground/70 leading-relaxed" variants={fadeInUp}>
                Hello! I'm Aliif, a content creator and storyteller passionate about crafting engaging narratives and digital experiences. I specialize in content creation for TikTok, writing compelling stories, and developing intuitive back-end systems. With a strong foundation in UI/UX design and web development, I blend creativity and technology to bring ideas to life through impactful visuals and meaningful interactions.
              </motion.p>

              {/* BAGIAN FILOSOFI BARU */}
              <motion.div className="space-y-6 pt-4" variants={fadeInUp}>
                {philosophies.map((philosophy) => (
                  <div key={philosophy.title} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {philosophy.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{philosophy.title}</h4>
                      <p className="text-foreground/60">{philosophy.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div className="flex flex-wrap gap-4 pt-6" variants={fadeInUp}>
                 <Link href="/contact">
                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">Let's Talk</Button>
                   </motion.div>
                 </Link>
                 <a href="/Aliif-cv.pdf" download>
                   <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     <Button size="lg" variant="outline"><Download className="mr-2 h-4 w-4" />Download CV</Button>
                   </motion.div>
                 </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* BAGIAN STATISTIK ANIMASI BARU */}
          <motion.div 
            className="mt-24 pt-16 border-t border-border"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp} className="p-6 bg-muted/50 rounded-lg border border-border">
                  <h3 className="text-5xl font-extrabold text-primary">
                    <AnimatedCounter value={stat.value} />+
                  </h3>
                  <p className="text-foreground/60 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}