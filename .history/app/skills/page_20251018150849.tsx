"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

// --- DATA BARU: CREATOR PLATFORMS ---
const creatorPlatforms = [
  {
    platform: "TikTok",
    description:
      "Creative and engaging short videos discussing Tokusatsu, anime, and Korean dramas.",
    link: "https://www.tiktok.com/@aalipli?lang=en", // Replace with your link
    logo: "/upload/tiktok.png",
    profileImage: "upload/aliif-profile.png", // Your profile picture
  },

  {
    platform: "YouTube",
    description:
      "Creative and engaging short videos discussing Ultraman, Super Sentai, and other Tokusatsu series.",
    link: "https://www.youtube.com/channel/UCQIMzkskw3-cVmH697oVZYw", // Ganti dengan link YouTube Anda
    logo: "/upload/yt.webp",
    profileImage: "/upload/yt.png",
  },
  {
    platform: "Wattpad",
    description:
      "A collection of cool fantasy stories and original narratives that I write.",
    link: "https://www.wattpad.com/user/aleevvideo", // Ganti dengan link Wattpad Anda
    logo: "/upload/awttpd.png",
    profileImage: "/upload/wttpd.png",
  },
];

// --- DATA SKILL TEKNIS (TETAP SAMA) ---
const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      /* ...data skill frontend Anda... */ {
        name: "HTML",
        icon: "/code/html.png",
      },
      { name: "CSS", icon: "/code/css.png" },
      { name: "JavaScript", icon: "/code/js.png" },
      { name: "TypeScript", icon: "/code/ts.png" },
      { name: "React", icon: "/code/react.png" },
      { name: "Next.js", icon: "/code/next.png" },
      { name: "Tailwind CSS", icon: "/code/tailwindcss.png" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      /* ...data skill backend Anda... */ {
        name: "Node.js",
        icon: "/code/nodejs.png",
      },
      { name: "Express.js", icon: "/code/expressjs.png" },
      { name: "MySQL", icon: "/code/mysql.png" },
    ],
  },
  {
    category: "Design & Other Tools",
    skills: [
      /* ...data skill design Anda... */ {
        name: "Figma",
        icon: "/skills/figma.png",
      },
      { name: "LabVIEW", icon: "/skills/labview.svg" },
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
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Aurora Dinamis */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%)",
        }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        {/* ... (kode navigasi tetap sama, pastikan link /skills aktif) ... */}
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

      <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono uppercase text-primary tracking-widest">
              My Arsenal
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Skills & Platforms
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
              Dari kreasi konten hingga kode, ini adalah platform dan teknologi
              yang saya gunakan untuk bercerita dan membangun.
            </p>
          </motion.div>

          {/* BAGIAN BARU: CREATOR PLATFORMS */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              My Creator Platforms
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creatorPlatforms.map((platform) => (
                <motion.div key={platform.platform} variants={fadeInUp}>
                  <Link
                    href={platform.link}
                    target="_blank"
                    className="group block relative h-96 w-full overflow-hidden rounded-xl shadow-lg border border-border"
                  >
                    <Image
                      src={platform.profileImage}
                      alt={`Aliif on ${platform.platform}`}
                      fill
                      className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
                    />

                    {/* Logo Platform */}
                    <div className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-sm rounded-full">
                      <Image
                        src={platform.logo}
                        alt={`${platform.platform} logo`}
                        width={24}
                        height={24}
                      />
                    </div>

                    {/* Overlay Deskripsi saat Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      <h3 className="text-2xl font-bold mb-2">
                        {platform.platform}
                      </h3>
                      <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        {platform.description}
                      </p>
                      <div className="flex items-center text-white mt-4 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        View Profile <ArrowUpRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BAGIAN TECHNICAL STACK (DIPERBARUI) */}
          <motion.div
            className="mt-24 pt-16 border-t border-border"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              My Technical Stack
            </h2>
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                className="mb-12"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="group relative p-6 rounded-lg bg-muted/30 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden border border-border"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Efek Border Gradien saat Hover */}
                      <div className="absolute inset-0 p-px rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary" />
                      </div>
                      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
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
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
