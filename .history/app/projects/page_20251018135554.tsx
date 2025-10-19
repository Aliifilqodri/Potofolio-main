"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react"; // Ikon baru!

// --- DATA PROYEK ---
const projects = [
  { title: "CinemaDB", description: "A movie search project built using the OMDb database.", tags: ["React", "API", "Vite"], image: "/movie-database-interface.jpg", link: "#" },
  { title: "Reog Ponorogo Landing Page", description: "A simple landing page website to showcase Reog Ponorogo culture.", tags: ["Web Design", "HTML", "CSS"], image: "/cultural-landing-page.jpg", link: "#" },
  { title: "JobSeeker Website Design", description: "A modern jobseeker website to help users explore career opportunities.", tags: ["Figma", "UI/UX"], image: "/job-portal-design.jpg", link: "#" },
  { title: "Asikin Mobile Design", description: "A mobile app design concept for street musicians and dancers.", tags: ["Figma", "Mobile Design"], image: "/mobile-app-design-concept.png", link: "#" },
];

// --- DATA SERTIFIKAT BARU ---
// Ganti dengan data dan link Google Drive Anda yang sebenarnya
const certificates = [
    {
        title: "Certified JavaScript Developer",
        issuer: "Dicoding Indonesia",
        date: "2024",
        link: "https://drive.google.com/your-link-here-1" // Ganti link ini
    },
    {
        title: "UI/UX Design Mastery",
        issuer: "BuildWith Angga",
        date: "2023",
        link: "https://drive.google.com/your-link-here-2" // Ganti link ini
    },
    {
        title: "Full-Stack Web Development",
        issuer: "FreeCodeCamp",
        date: "2023",
        link: "https://drive.google.com/your-link-here-3" // Ganti link ini
    }
];

// --- DATA TESTIMONI ---
const testimonials = [
  { quote: "Working with Aliif was an absolute pleasure. His attention to detail and creative vision transformed our project.", name: "Farhan Maulana", title: "CEO, Tech Solutions Inc.", image: "/avatars/farhan.png" },
  { quote: "The design process was seamless and collaborative. Aliif has a unique ability to understand complex requirements.", name: "Alip Zulfikar", title: "Product Manager, Creative Co.", image: "/avatars/alip.png" },
  { quote: "I'm impressed by the quality of the code and the modern technologies used. A truly professional developer.", name: "Deryl Ramadhan", title: "Lead Engineer, Innovate Startups", image: "/avatars/deryl.png" },
];

// --- VARIAN ANIMASI ---
const fadeInUp = { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },};
const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } },};

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
      {/* Latar Belakang Aurora Dinamis */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <motion.div className="absolute inset-0 -z-20" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%)',}} animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0],}} transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse'}}/>

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          {/* ... (kode navigasi tetap sama, pastikan link /projects aktif) ... */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Aliif<span className="text-primary text-3xl">.</span></Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">About Me</Link>
            <Link href="/skills" className="text-foreground hover:text-primary transition-colors duration-300">Skills & Tools</Link>
            <Link href="/projects" className="font-semibold text-primary">Projects</Link>
            <Link href="/experience" className="text-foreground hover:text-primary transition-colors duration-300">Experience</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">Contact Me</Link>
          </div>
        </div>
      </nav>

      <main className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true, amount: 0.5 }}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">Selected Works</span>
              <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                My Projects Showcase
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                A curated collection of my creations, from full-stack applications to modern UI/UX designs.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}>
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={project.link} className="group block relative h-80 w-full overflow-hidden rounded-xl shadow-lg">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-4">{project.title}</h3>
                      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out">
                        <p className="text-white/80 mb-4">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {project.tags.map((tag) => (<span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">{tag}</span>))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* BAGIAN SERTIFIKAT BARU */}
          <section id="certificates" className="mb-24 pt-16 border-t border-border">
             <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true, amount: 0.5 }}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">My Credentials</span>
              <h1 className="text-4xl md:text-6xl font-black mt-2">
                Certifications & Achievements
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                Validations of my skills and knowledge from respected institutions in the industry.
              </p>
            </motion.div>
            
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}>
               {certificates.map((cert, index) => (
                  <motion.a 
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-muted/40 p-6 rounded-xl border border-border flex flex-col cursor-pointer backdrop-blur-sm"
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 15px 30px -5px rgba(var(--primary-rgb), 0.15)"}}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                       <Trophy className="w-8 h-8 text-primary/70"/>
                       <p className="text-sm font-semibold text-foreground/60">{cert.issuer}</p>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground text-balance">{cert.title}</h3>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                       <p className="text-sm text-foreground/60">{cert.date}</p>
                       <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           View Certificate <ExternalLink className="ml-2 h-4 w-4"/>
                       </div>
                    </div>
                  </motion.a>
               ))}
            </motion.div>
          </section>
          
          {/* Testimonials Section */}
          <section id="testimonials" className="pt-16 border-t border-border">
            <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true, amount: 0.5 }}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">Testimonials</span>
              <h1 className="text-4xl md:text-6xl font-black mt-2">What Others Say</h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                Hear from colleagues and clients who have experienced my work firsthand.
              </p>
            </motion.div>
            
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-background p-8 rounded-xl border border-border shadow-sm flex flex-col"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-foreground/80 italic flex-grow mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto pt-6 border-t border-border">
                    <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full mr-4 border-2 border-primary/50"/>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}