"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react"; // Ikon untuk link eksternal

// --- DATA SKILL TEKNIS ---
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
    ],
  },
];

// --- DATA PLATFORM KREATIF BARU ---
const creativePlatforms = [
    {
        name: "TikTok",
        description: "Konten video pendek yang menghibur dan informatif, menjangkau audiens luas dengan tren terbaru.",
        link: "https://tiktok.com/@aliifilqodri", // Ganti dengan link Anda
        profileImage: "/my-profile.jpg", // Ganti dengan foto profil Anda
        logo: "/skills/tiktok.svg",
        accentColor: "shadow-cyan-400/20"
    },
    {
        name: "YouTube",
        description: "Video esai dan tutorial mendalam yang membahas topik kreatif dan teknis dengan sinematik.",
        link: "https://youtube.com/c/aliifilqodri", // Ganti dengan link Anda
        profileImage: "/my-profile.jpg",
        logo: "/skills/youtube.svg",
        accentColor: "shadow-red-500/20"
    },
    {
        name: "Wattpad",
        description: "Tempat saya menuangkan ide dan imajinasi menjadi cerita fiksi yang memikat pembaca.",
        link: "https://wattpad.com/user/aliifilqodri", // Ganti dengan link Anda
        profileImage: "/my-profile.jpg",
        logo: "/skills/wattpad.svg",
        accentColor: "shadow-orange-500/20"
    }
];


// --- VARIAN ANIMASI ---
const fadeInUp = { /* ... (tetap sama) ... */ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },};
const staggerContainer = { /* ... (tetap sama) ... */ animate: { transition: { staggerChildren: 0.1 } },};

export default function Skills() {
  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Aurora Dinamis */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <motion.div className="absolute inset-0 -z-20" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%)',}} animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0],}} transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse'}}/>
      
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

      <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-sm font-mono uppercase text-primary tracking-widest">My Arsenal & Platforms</span>
            <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Creative & Technical Skills
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
              From lines of code to compelling stories, these are the tools and platforms I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Bagian 1: Technical Arsenal */}
          <motion.div
            className="space-y-12"
            initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category) => (
              <motion.div key={category.category} variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-6 text-center md:text-left">{category.category}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="group bg-muted/40 p-6 rounded-lg border border-border flex flex-col items-center justify-center gap-4 cursor-pointer backdrop-blur-sm"
                      whileHover={{ y: -8, scale: 1.05, boxShadow: "0px 10px 30px -5px rgba(var(--primary-rgb), 0.2)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <motion.div className="transition-transform duration-300 group-hover:-translate-y-1">
                        <Image src={skill.icon} alt={`${skill.name} logo`} width={48} height={48} className="object-contain h-12 w-12 grayscale group-hover:grayscale-0 transition-all duration-300"/>
                      </motion.div>
                      <span className="font-semibold text-foreground/80">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bagian 2: Creative Platforms */}
          <motion.div 
            className="mt-24 pt-16 border-t border-border"
            initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.3 }}
          >
             <motion.div className="text-center mb-12" variants={fadeInUp}>
                <h2 className="text-3xl font-bold">My Creative Platforms</h2>
                <p className="text-foreground/60 max-w-xl mx-auto mt-2">Where my ideas take form and connect with audiences.</p>
             </motion.div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {creativePlatforms.map((platform) => (
                   <motion.a 
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative block h-96 w-full overflow-hidden rounded-xl shadow-lg ${platform.accentColor}`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                   >
                     <Image src={platform.profileImage} alt={`Aliif's profile on ${platform.name}`} fill className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"/>
                     
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"/>
                     
                     <div className="relative h-full flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <Image src={platform.logo} alt={`${platform.name} logo`} width={40} height={40} className="mb-4 drop-shadow-lg"/>
                        <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                        <p className="text-white/80 mb-4">{platform.description}</p>
                        <div className="mt-2">
                           <Button variant="secondary" size="sm">
                              View Profile <ArrowUpRight className="ml-2 h-4 w-4"/>
                           </Button>
                        </div>
                     </div>
                   </motion.a>
                ))}
             </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}