"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- DATA BARU: PLATFORM KREATIF ANDA ---
const creativePlatforms = [
  {
    platform: "TikTok",
    handle: "@aliifilqodri",
    description: "Konten seputar teknologi, cerita, dan hal-hal menarik lainnya yang dikemas secara kreatif dan singkat.",
    link: "https://www.tiktok.com/@aliifilqodri", // Ganti dengan link TikTok Anda
    profileImage: "/my-profile.png",
    coverImage: "/covers/tiktok-bg.jpg",
    icon: "/skills/tiktok.svg",
  },
  {
    platform: "YouTube",
    handle: "Aliif Ilqodri",
    description: "Video esai dan eksplorasi mendalam tentang teknologi, pengembangan diri, dan penceritaan digital.",
    link: "https://www.youtube.com/channel/your-channel", // Ganti dengan link YouTube Anda
    profileImage: "/my-profile.png",
    coverImage: "/covers/youtube-bg.jpg",
    icon: "/skills/youtube.svg",
  },
  {
    platform: "Wattpad",
    handle: "aliifilqodri",
    description: "Tempat saya menuangkan ide dan imajinasi ke dalam cerita fiksi dan narasi yang menggugah.",
    link: "https://www.wattpad.com/user/aliifilqodri", // Ganti dengan link Wattpad Anda
    profileImage: "/my-profile.png",
    coverImage: "/covers/wattpad-bg.jpg",
    icon: "/skills/wattpad.svg",
  },
];

// --- DATA SKILL YANG DIPERBARUI ---
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
    category: "Design & Content Tools", // Nama kategori diupdate
    skills: [
      { name: "Figma", icon: "/skills/figma.svg" },
      { name: "Notion", icon: "/skills/notion.svg" }, // Ditambahkan
      { name: "Canva", icon: "/skills/canva.svg" }, // Ditambahkan
      { name: "LabVIEW", icon: "/skills/labview.svg" },
    ],
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },};
const staggerContainer = { animate: { transition: { staggerChildren: 0.15 } },};

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          {/* ... (kode navigasi tetap sama, pastikan link /skills aktif) ... */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">About Me</Link>
            <Link href="/skills" className="font-semibold text-primary">Skills & Tools</Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</Link>
            <Link href="/experience" className="text-foreground hover:text-primary transition-colors duration-300">Experience</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact Me</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-sm font-mono uppercase text-primary tracking-widest">My Digital Playground</span>
            <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Creative Platforms & Tech Stack
            </h1>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto mt-4">
              Ini adalah tempat saya berkreasi dan alat yang saya gunakan untuk mewujudkannya. Dari konten yang menghibur hingga kode yang efisien.
            </p>
          </motion.div>

          {/* BAGIAN BARU: MY CREATIVE PLATFORMS */}
          <motion.div
            className="mb-24"
            initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Find Me Creating On</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creativePlatforms.map((platform) => (
                <motion.div key={platform.platform} variants={fadeInUp}>
                  <Link href={platform.link} target="_blank" rel="noopener noreferrer" className="block group relative rounded-xl overflow-hidden h-96">
                    {/* Background Image */}
                    <Image src={platform.coverImage} alt={`${platform.platform} cover`} fill className="object-cover w-full h-full transform transition-all duration-500 ease-in-out group-hover:scale-110"/>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>

                    {/* Content Awal (Sebelum Hover) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
                       <Image src={platform.icon} alt={platform.platform} width={64} height={64} className="drop-shadow-lg"/>
                       <h3 className="text-3xl font-bold mt-4 drop-shadow-lg">{platform.platform}</h3>
                    </div>

                    {/* Content Saat Hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                       <Image src={platform.profileImage} alt="Aliif's Profile" width={80} height={80} className="rounded-full border-2 border-white/50 mb-4"/>
                       <h4 className="text-xl font-bold">{platform.handle}</h4>
                       <p className="mt-2 mb-6 text-white/80">{platform.description}</p>
                       <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold">
                         Visit Profile <ArrowUpRight className="w-4 h-4"/>
                       </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BAGIAN LAMA: TECHNOLOGIES & TOOLS */}
          <motion.div
            className="space-y-12"
            initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technologies I Use</h2>
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="group relative bg-muted/50 p-6 rounded-lg border border-border flex flex-col items-center justify-center gap-4 cursor-pointer"
                      whileHover={{ y: -8, scale: 1.05, boxShadow: "0px 10px 30px -5px rgba(var(--primary-rgb), 0.2)", }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Image src={skill.icon} alt={`${skill.name} logo`} width={48} height={48} className="object-contain h-12 w-12 grayscale group-hover:grayscale-0 transition-all duration-300"/>
                      <span className="font-semibold text-foreground/80">{skill.name}</span>
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