"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ExternalLink, Star, Briefcase, Award } from "lucide-react";
import React, { useEffect } from "react";

// --- DATA (Sama seperti sebelumnya) ---
const projects = [
  {
    title: "CinemaDB",
    description: "A movie search project built using the OMDb database.",
    tags: ["React", "API", "Vite"],
    image: "/movie-database-interface.jpg",
    link: "https://github.com/your-username/cinemadb", // Ganti link
  },
  {
    title: "Reog Ponorogo Landing Page",
    description:
      "A simple landing page website to showcase Reog Ponorogo culture.",
    tags: ["Web Design", "HTML", "CSS"],
    image: "/cultural-landing-page.jpg",
    link: "#",
  },
  // ... proyek lainnya
];
const certificates = [
  {
    title: "JavaScript Dasar",
    issuer: "Dicoding Indonesia",
    image: "/certificates/dicoding-js.jpg",
    link: "https://www.dicoding.com/certificates/EXAMPLE",
  },
  {
    title: "Google Analytics for Beginners",
    issuer: "Google Analytics Academy",
    image: "/certificates/google-analytics.jpg",
    link: "https://analytics.google.com/analytics/academy/certificate/EXAMPLE",
  },
  {
    title: "React Front-End",
    issuer: "Hacktiv8",
    image: "/certificates/hacktiv8-react.jpg",
    link: "https://www.hacktiv8.com/certificate/EXAMPLE",
  },
];
const testimonials = [
  {
    quote:
      "Working with Aliif was an absolute pleasure. His attention to detail and creative vision transformed our project from a simple idea into a stunning reality.",
    name: "Farhan Maulana",
    title: "CEO, Tech Solutions Inc.",
    image: "/avatars/farhan.png",
  },
  {
    quote:
      "The design process was seamless. Aliif has a unique ability to understand complex requirements and translate them into intuitive, beautiful user interfaces.",
    name: "Alip Zulfikar",
    title: "Product Manager, Creative Co.",
    image: "/avatars/alip.png",
  },
  {
    quote:
      "An incredibly talented developer. The final product exceeded all our expectations. Highly recommended for anyone looking for quality and professionalism.",
    name: "Syarofi",
    title: "Lead Engineer, Innovatech",
    image: "/avatars/syarofi.png", // Ganti dengan path avatar yang sesuai
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

// --- KOMPONEN BARU: Section Title ---
const SectionTitle = ({ icon: Icon, subtitle, title }) => (
  <motion.div
    className="text-center mb-12"
    initial="initial"
    whileInView="animate"
    variants={fadeInUp}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-center gap-2 mb-2">
      <Icon className="text-primary" size={18} />
      <span className="text-sm font-mono uppercase text-primary tracking-widest">
        {subtitle}
      </span>
    </div>
    <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
      {title}
    </h1>
  </motion.div>
);

// --- KOMPONEN BARU: Project Card ---
const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="group"
  >
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative h-80 w-full overflow-hidden rounded-xl shadow-lg border border-border/20 transition-all duration-300 hover:border-primary/60 hover:shadow-primary/20 hover:shadow-2xl"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-6">
          {project.title}
        </h3>
        <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out">
          <p className="text-white/80 mb-4">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// --- KOMPONEN BARU: Certificate Card ---
const CertificateCard = ({ cert }) => (
  <motion.div
    className="group relative flex-shrink-0 w-80 md:w-96 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border/20"
    whileHover={{
      scale: 1.05,
      y: -10,
      boxShadow: "0px 20px 40px -10px rgba(var(--primary-rgb), 0.3)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Image src={cert.image} alt={cert.title} fill className="object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
    <div className="relative h-full flex flex-col justify-end p-6 text-white">
      <h3 className="text-xl font-bold">{cert.title}</h3>
      <p className="text-sm text-white/80 mb-4">{cert.issuer}</p>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg">
          View Certificate <ExternalLink size={16} />
        </button>
      </a>
    </div>
  </motion.div>
);

// --- KOMPONEN BARU: Testimonial Card ---
const TestimonialCard = ({ testimonial }) => (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col text-center items-center break-inside-avoid"
    >
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={70}
        height={70}
        className="rounded-full mb-4 border-2 border-primary/50"
      />
      <p className="text-foreground/80 italic flex-grow mb-5">
        "{testimonial.quote}"
      </p>
      <div className="mt-auto">
        <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
        <p className="text-sm text-foreground/60">{testimonial.title}</p>
      </div>
    </motion.div>
);

// --- KOMPONEN UTAMA ---
export default function Projects() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 3, { duration: 2 });
    return animation.stop;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Canggih */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent_30%), radial-gradient(circle at 90% 80%, rgba(var(--primary-rgb), 0.1) 0%, transparent 30%)",
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      
      {/* Navigation (Sama seperti sebelumnya) */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">Aliif<span className="text-primary text-3xl">.</span></Link>
              {/* Tambahkan link navigasi lain jika perlu */}
          </div>
      </nav>

      <main className="px-4">

        {/* BAGIAN 1: HERO SECTION BARU */}
        <section className="py-28 md:py-36 text-center relative">
            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                pointerEvents: 'none',
                background: 'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)',
                transform: 'translateY(-50%)',
                opacity: 0.5,
              }}
            />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
          >
            Crafting Digital Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto mt-6"
          >
            A curated showcase of my passion for code, design, and impactful digital experiences.
          </motion.p>
        </section>


        {/* BAGIAN 2: PROJECTS */}
        <section id="projects" className="py-24">
          <div className="max-w-6xl mx-auto">
            <SectionTitle icon={Briefcase} subtitle="Selected Works" title="My Creative Arsenal" />
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              whileInView="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* BAGIAN 3: CERTIFICATES */}
        <section id="certificates" className="py-24 bg-muted/30 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <SectionTitle icon={Award} subtitle="Credentials" title="Validated Skills" />
            <div className="relative">
              <motion.div
                className="flex gap-8 cursor-grab px-4 pb-8"
                drag="x"
                dragConstraints={{ right: 0, left: -1000 }} // Sesuaikan nilai left jika sertifikat lebih banyak
                whileTap={{ cursor: "grabbing" }}
              >
                {certificates.map((cert, index) => (
                  <CertificateCard key={index} cert={cert} />
                ))}
              </motion.div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-foreground/50 hidden md:block">
                Drag to explore →
              </div>
            </div>
          </div>
        </section>

        {/* BAGIAN 4: TESTIMONIALS */}
        <section id="testimonials" className="py-24">
          <div className="max-w-6xl mx-auto">
             <SectionTitle icon={Star} subtitle="Social Proof" title="Voices of Collaboration" />
            <motion.div
              className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
              initial="initial"
              whileInView="animate"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}