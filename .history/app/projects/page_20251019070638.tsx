"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

// --- DATA PROYEK ---
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

// --- DATA SERTIFIKAT ---
const certificates = [
  {
    title: "JavaScript Dasar",
    issuer: "Dicoding Indonesia",
    image: "/certificates/dicoding-js.jpg", // Path ke gambar sertifikat Anda
    link: "https://www.dicoding.com/certificates/EXAMPLE", // Link Google Drive Anda
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
  // Tambahkan sertifikat lainnya di sini
];

// --- DATA TESTIMONI ---
const testimonials = [
  {
    quote:
      "Working with Aliif was an absolute pleasure. His attention to detail and creative vision transformed our project.",
    name: "Farhan Maulana",
    title: "CEO, Tech Solutions Inc.",
    image: "/avatars/farhan.png",
  },
  {
    quote:
      "The design process was seamless and collaborative. Aliif has a unique ability to understand complex requirements.",
    name: "Alip Zulfikar",
    title: "Product Manager, Creative Co.",
    image: "/avatars/alip.png",
  },
  // ... testimoni lainnya
];

// --- VARIAN ANIMASI ---
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

// --- KOMPONEN UNTUK ANIMASI SAAT SCROLL ---
const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Aurora Dinamis */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.15) 0%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(var(--primary-rgb), 0.15) 0%, transparent 30%)",
        }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Me</Link>
            <Link href="/skills" className="nav-link">Skills</Link>
            <Link href="/projects" className="font-semibold text-primary">Projects</Link>
            <Link href="/experience" className="nav-link">Experience</Link>
            <Link href="/contact" className="ml-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="px-4">
        {/* Bagian 1: Projects Section */}
        <section id="projects" className="py-28">
          <AnimatedSection className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-20" variants={fadeInUp}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">
                My Creations
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50 leading-tight">
                Digital Showcase
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-6">
                A curated gallery of my work, blending creative design with robust functionality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-2xl border border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-500"
                  >
                    <div className="relative h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6 bg-card">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-foreground/70 mb-4 h-12">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                          <span className="mr-2 font-semibold">View</span>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Bagian 2: Certificates Section */}
        <section id="certificates" className="py-28 bg-muted/30">
          <AnimatedSection className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-20" variants={fadeInUp}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">
                Credentials
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-2">
                Validated Skills
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-6">
                My certifications serve as a testament to my dedication and expertise in the field.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-video rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-sm text-white/80 mb-4">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Certificate <ExternalLink size={16} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </section>

        {/* Bagian 3: Testimonials Section */}
        <section id="testimonials" className="py-28">
          <AnimatedSection className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-20" variants={fadeInUp}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">
                Testimonials
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-2">
                Kind Words
              </h1>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-card/50 p-8 rounded-2xl border border-border/50 shadow-sm flex flex-col text-center items-center"
                  variants={fadeInUp}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full mb-6 border-2 border-primary/50"
                  />
                  <p className="text-foreground/80 italic flex-grow mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </main>

      <style jsx global>{`
        .nav-link {
          position: relative;
          color: var(--foreground);
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
}