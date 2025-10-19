"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
  SendHorizontal,
  Loader2,
  CheckCircle2,
  XCircle,
  PenSquare, // Ikon baru ditambahkan
} from "lucide-react";

// --- DATA KONTAK & SOSIAL MEDIA ---
const contactDetails = [
  { icon: <Mail />, title: "Email", value: "aliifilqodri@gmail.com", href: "mailto:aliifilqodri@gmail.com" },
  { icon: <Phone />, title: "Phone", value: "+62 82111016617", href: "https://wa.me/6282111016617" },
  { icon: <MapPin />, title: "Location", value: "Jakarta, Indonesia" },
];

const socialLinks = [
  { icon: <Github />, href: "https://github.com/Aliifilqodri", label: "GitHub" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/moh-aliifil-qodri-vanoza-araby-b4b3a2330/", label: "LinkedIn" },
  { icon: <Instagram />, href: "https://www.instagram.com/aaliipppp._", label: "Instagram" },
];

// --- KOMPONEN ANIMASI TEKS ---
const AnimatedText = ({ text, className = "" }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={`font-black text-4xl md:text-6xl text-balance ${className}`}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-4">
          {word.split("").map((letter, letterIndex) => (
            <motion.span key={letterIndex} className="inline-block" variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// --- KOMPONEN UTAMA HALAMAN KONTAK ---
export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/meordonr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
        {/* Latar Belakang Interaktif */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl transition duration-300"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`,
          }}
        />
        
        {/* Navigasi */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Aliif<span className="text-primary text-3xl">.</span></Link>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">About Me</Link>
              <Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</Link>
              <Link href="/contact" className="font-semibold text-primary">Contact Me</Link>
            </div>
          </div>
        </nav>

        {/* Bagian Kontak */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sisi Kiri: Info */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="space-y-4">
                <span className="text-sm font-mono uppercase text-primary tracking-widest">Let's Connect</span>
                <AnimatedText text="Let's build something amazing together." />
                <p className="text-lg text-foreground/70 pt-2">
                  Have an idea, a project, or just want to say hi? My inbox is always open. I'm excited to hear from you.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-border">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.title}
                    href={detail.href}
                    target={!detail.href?.startsWith("mailto:") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="relative p-3 bg-muted text-primary rounded-lg border border-border overflow-hidden">
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-full group-hover:translate-x-0 skew-x-[-15deg]"/>
                       <span className="relative z-10">{detail.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{detail.title}</h4>
                      <p className="text-foreground/70 group-hover:text-primary transition-colors">{detail.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-border">
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <motion.a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                        className="p-3 bg-muted text-foreground/70 hover:text-primary rounded-lg border border-border transition-colors"
                        whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent><p>{social.label}</p></TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>

            {/* Sisi Kanan: Formulir Kontak */}
            <motion.div
              className="bg-muted/30 border border-border rounded-xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              {/* --- JUDUL BARU YANG LEBIH KEREN --- */}
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3"
              >
                <PenSquare className="text-primary" />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Send Me a Message
                </span>
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <Input name="name" id="name" type="text" value={formData.name} onChange={handleInputChange} required className="peer block w-full bg-transparent pt-4 pb-2 px-2 text-lg border-b-2 border-foreground/30 focus:outline-none focus:border-primary transition" placeholder=" " />
                  <Label htmlFor="name" className="absolute left-2 top-4 text-foreground/70 transform transition-all duration-300 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4">Your Name</Label>
                </div>
                <div className="relative group">
                  <Input name="email" id="email" type="email" value={formData.email} onChange={handleInputChange} required className="peer block w-full bg-transparent pt-4 pb-2 px-2 text-lg border-b-2 border-foreground/30 focus:outline-none focus:border-primary transition" placeholder=" " />
                  <Label htmlFor="email" className="absolute left-2 top-4 text-foreground/70 transform transition-all duration-300 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4">Your Email</Label>
                </div>
                <div className="relative group">
                   <Textarea name="message" id="message" value={formData.message} onChange={handleInputChange} required className="peer block w-full bg-transparent pt-4 pb-2 px-2 text-lg border-b-2 border-foreground/30 focus:outline-none focus:border-primary transition resize-none" placeholder=" " rows={4} />
                   <Label htmlFor="message" className="absolute left-2 top-4 text-foreground/70 transform transition-all duration-300 origin-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4">Your Message</Label>
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full relative overflow-hidden group">
                    <span className="absolute w-full h-full bg-gradient-to-r from-primary/50 to-primary/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                    <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? ( <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> ) : ( <>Send Message <SendHorizontal className="w-4 h-4" /></> )}
                    </span>
                </Button>

                <AnimatePresence>
                  {submissionStatus === 'success' && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-sm text-green-500 flex items-center gap-2 justify-center">
                      <CheckCircle2 size={16}/> Message sent successfully!
                    </motion.p>
                  )}
                  {submissionStatus === 'error' && (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-sm text-red-500 flex items-center gap-2 justify-center">
                      <XCircle size={16}/> Oops! Something went wrong.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}