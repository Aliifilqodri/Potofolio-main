"use client";

import React, in { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
} from "lucide-react";

// --- DATA KONTAK & SOSIAL MEDIA ---
const contactDetails = [
  {
    icon: <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />,
    title: "Email",
    value: "aliifilqodri@gmail.com",
    href: "mailto:aliifilqodri@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />,
    title: "Phone",
    value: "+62 82111016617",
    href: "https://wa.me/6282111016617",
  },
  {
    icon: <MapPin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />,
    title: "Location",
    value: "Jakarta, Indonesia",
  },
];

const socialLinks = [
  { icon: <Github />, href: "https://github.com/Aliifmugi", label: "GitHub" },
  { icon: <Linkedin />, href: "https://linkedin.com/in/Aliif-mugi", label: "LinkedIn" },
  { icon: <Instagram />, href: "https://instagram.com/Aliifmugi", label: "Instagram" },
];

// --- VARIAN ANIMASI ---
const slideIn = (direction = "left", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 20, delay } },
});

const staggerContainer = { animate: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // --- LOGIKA UNTUK EFEK SPOTLIGHT ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  
  const spotlightStyle = {
    background: useTransform(
      [smoothMouseX, smoothMouseY],
      ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(var(--primary-rgb), 0.15) 0%, transparent 50%)`
    ),
  };
  
  // --- LOGIKA FORM ---
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    try {
      const res = await fetch("https://formspree.io/f/YOUR_UNIQUE_ID", { // <-- GANTI DENGAN URL ANDA
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else { throw new Error("Failed to send"); }
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground relative isolate overflow-hidden">
        {/* Latar Belakang & Efek Spotlight */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <motion.div className="absolute inset-0 -z-10" style={spotlightStyle} />

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Aliif<span className="text-primary text-3xl">.</span></Link>
            <div className="hidden md:flex gap-8">
              {/* ... link navigasi Anda ... */}
              <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link href="/projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</Link>
              <Link href="/contact" className="font-semibold text-primary">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Contact Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: Info & Socials */}
            <motion.div className="space-y-10" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{ once: true, amount: 0.2 }}>
              <motion.div className="space-y-4" variants={slideIn("left")}>
                <span className="text-sm font-mono uppercase text-primary tracking-widest">Get in Touch</span>
                <h1 className="text-4xl md:text-6xl font-black text-balance">Let's Build Something Great Together.</h1>
                <p className="text-lg text-foreground/70">Open to new projects, creative ideas, or opportunities. Let's connect and make an impact.</p>
              </motion.div>

              <motion.div className="space-y-6 pt-6 border-t border-white/10" variants={staggerContainer}>
                {contactDetails.map((detail, i) => (
                  <motion.div key={detail.title} className="flex items-start gap-4 group" variants={slideIn("left", i * 0.1)}>
                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">{detail.icon}</div>
                    <div>
                      <h4 className="font-bold">{detail.title}</h4>
                      <a href={detail.href} target={!detail.href?.startsWith("mailto:") ? "_blank" : "_self"} rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">{detail.value}</a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="flex gap-4 pt-6 border-t border-white/10" variants={slideIn("left", 0.4)}>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <motion.a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="p-3 bg-white/5 text-foreground/70 hover:text-primary rounded-lg border border-white/10 transition-colors" whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}>{social.icon}</motion.a>
                    </TooltipTrigger>
                    <TooltipContent><p>{social.label}</p></TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side: Contact Form (Glassmorphism) */}
            <motion.div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-2xl shadow-primary/5" initial="initial" whileInView="animate" variants={slideIn("right")} viewport={{ once: true, amount: 0.3 }}>
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required className="bg-transparent border-white/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" placeholder="john.doe@example.com" type="email" value={formData.email} onChange={handleInputChange} required className="bg-transparent border-white/20 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Hi Aliif, I'd like to talk about..." rows={5} value={formData.message} onChange={handleInputChange} required className="bg-transparent border-white/20 focus:border-primary" />
                </div>
                <Button type="submit" size="lg" className="w-full shimmer-button" disabled={isSubmitting}>
                  {isSubmitting ? ( <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending...</> ) : ( <><SendHorizontal className="w-4 h-4 mr-2" /> Send Message</> )}
                </Button>
                {submissionStatus && <p className={`text-sm text-center pt-2 ${submissionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {submissionStatus === 'success' ? "Message sent successfully! I'll be in touch soon." : "Oops! Something went wrong. Please try again."}
                </p>}
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}