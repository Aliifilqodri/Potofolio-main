"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; // Ikon baru untuk link

// --- DATA PROYEK ---
const projects = [
  {
    title: "CinemaDB",
    description: "A movie search project built using the OMDb database.",
    tags: ["React", "API", "Vite"],
    image: "/movie-database-interface.jpg",
    link: "https://github.com/your-username/cinemadb", // Ganti dengan link proyek Anda
  },
  {
    title: "Reog Ponorogo Landing Page",
    description: "I created a simple landing page website to showcase Reog Ponorogo culture.",
    tags: ["Web Design", "HTML", "CSS"],
    image: "/cultural-landing-page.jpg",
    link: "https://github.com/your-username/reog-page",
  },
  // ... (proyek lainnya)
];

// --- DATA SERTIFIKAT BARU ---
const certificates = [
    {
        title: "Meta Front-End Developer",
        issuer: "Coursera",
        image: "/certificates/meta-frontend-preview.jpg", // Ganti dengan path gambar pratinjau Anda
        link: "https://link.gdrive/meta-certificate" // Ganti dengan link GDrive Anda
    },
    {
        title: "Full-Stack Web Development",
        issuer: "Dicoding Indonesia",
        image: "/certificates/dicoding-fullstack-preview.jpg",
        link: "https://link.gdrive/dicoding-certificate"
    },
    {
        title: "Dasar-Dasar UI/UX Design",
        issuer: "Skilvul",
        image: "/certificates/skilvul-uiux-preview.jpg",
        link: "https://link.gdrive/skilvul-certificate"
    }
];

// --- DATA TESTIMONI ---
const testimonials = [
  // ... (data testimoni Anda tetap sama)
  {
    quote:
      "Working with Aliif was an absolute pleasure. His attention to detail and creative vision transformed our project. The final result exceeded all our expectations!",
    name: "Farhan Maulana",
    title: "CEO, Tech Solutions Inc.",
    image: "/avatars/farhan.png",
  },
  {
    quote:
      "The design process was seamless and collaborative. Aliif has a unique ability to understand complex requirements and translate them into a beautiful and intuitive UI.",
    name: "Alip Zulfikar",
    title: "Product Manager, Creative Co.",
    image: "/avatars/alip.png",
  },
  {
    quote:
      "I'm impressed by the quality of the code and the modern technologies used. The application is fast, responsive, and robust. A truly professional developer.",
    name: "Deryl Ramadhan",
    title: "Lead Engineer, Innovate Startups",
    image: "/avatars/deryl.png",
  },
];

// --- VARIAN ANIMASI ---
const fadeInUp = { /* ... (tetap sama) ... */ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },};
const staggerContainer = { /* ... (tetap sama) ... */ animate: { transition: { staggerChildren: 0.1 } },};


export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
        {/* Latar Belakang Aurora Dinamis */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <motion.div className="absolute inset-0 -z-20" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 90%, rgba(var(--primary-rgb), 0.1) 0%, transparent 25%)',}} animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0],}} transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse'}}/>

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        {/* ... (kode navigasi tetap sama, pastikan link /projects aktif) ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>
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

      <main>
        {/* Projects Section */}
        <section id="projects" className="py-24 px-4">
          {/* ... (Kode header "My Projects Showcase" tetap sama) ... */}
           <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">Selected Works</span>
              <h1 className="text-4xl md:text-6xl font-black mt-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                My Projects Showcase
              </h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                A curated collection of my creations, from full-stack web
                applications to modern UI/UX designs.
              </p>
            </motion.div>

             <motion.div className="grid md:grid-cols-2 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true }}>
                {/* ... (Mapping untuk proyek tetap sama) ... */}
                 {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={project.link} className="group block relative h-80 w-full overflow-hidden rounded-xl shadow-lg">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-4">
                        {project.title}
                      </h3>
                      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-full transition-all duration-500 ease-in-out">
                        <p className="text-white/80 mb-4">{project.description}</p>
                        <div className="flex gap-2 flex-wrap">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
             </motion.div>
           </div>
        </section>

        {/* BAGIAN SERTIFIKAT BARU */}
        <section id="certificates" className="py-24 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
                    <span className="text-sm font-mono uppercase text-primary tracking-widest">My Credentials</span>
                    <h1 className="text-4xl md:text-6xl font-black mt-2">Certifications & Achievements</h1>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                        A collection of certifications that validate my skills and commitment to continuous learning.
                    </p>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}>
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
                            variants={fadeInUp}
                            whileHover={{ y: -8, scale: 1.03, boxShadow: "0px 20px 40px -10px rgba(var(--primary-rgb), 0.25)" }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                            <Image src={cert.image} alt={cert.title} fill className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold">{cert.title}</h3>
                                <p className="text-sm text-white/80">{cert.issuer}</p>
                            </div>

                            <div className="absolute top-4 right-4 p-2 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                <ExternalLink className="w-5 h-5 text-white"/>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-4">
           {/* ... (Kode untuk bagian testimoni tetap sama) ... */}
           <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={fadeInUp} viewport={{ once: true }}>
              <span className="text-sm font-mono uppercase text-primary tracking-widest">Testimonials</span>
              <h1 className="text-4xl md:text-6xl font-black mt-2">What Others Say</h1>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto mt-4">
                Hear from colleagues and clients who have experienced my work firsthand.
              </p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true }}>
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} className="bg-background p-8 rounded-xl border border-border shadow-sm flex flex-col text-center items-center" variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mb-4 border-2 border-primary/50"/>
                  <p className="text-foreground/80 italic flex-grow mb-6">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}