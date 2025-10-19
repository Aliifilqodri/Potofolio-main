"use client";

import React, { useState } from "react";
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
import { motion } from "framer-motion";
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

// --- DATA KONTAK & SOSIAL MEDIA (Email href diperbaiki) ---
const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "aliifilqodri@gmail.com",
    href: "mailto:aliifilqodri@gmail.com", // Dibuat lowercase untuk konsistensi
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+62 857 4925 7423",
    href: "https://wa.me/62821",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "Jakarta, Indonesia",
  },
];

const socialLinks = [
  {
    icon: <Github />,
    href: "https://github.com/Aliifmugi",
    label: "GitHub",
  },
  {
    icon: <Linkedin />,
    href: "https://linkedin.com/in/Aliif-mugi",
    label: "LinkedIn",
  },
  {
    icon: <Instagram />,
    href: "https://instagram.com/Aliifmugi",
    label: "Instagram",
  },
];

// --- VARIAN ANIMASI ---
const slideIn = (direction = "left", delay = 0) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8, delay },
  },
});

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_UNIQUE_ID", { // GANTI DENGAN URL ANDA
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
      <div className="min-h-screen bg-background text-foreground">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Aliif<span className="text-primary text-3xl">.</span></Link>
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">Home</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">About Me</Link>
              <Link href="/skills" className="text-foreground hover:text-primary transition-colors duration-300">Skills & Tools</Link>
              <Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-300">Projects</Link>
              <Link href="/experience" className="text-foreground hover:text-primary transition-colors duration-300">Experience</Link>
              <Link href="/testimonials" className="text-foreground hover:text-foreground/70 transition">Testimonials</Link>
              <Link href="/contact" className="font-semibold text-primary">Contact Me</Link>
            </div>
          </div>
        </nav>

        {/* Contact Section */}
        <section className="py-24 px-4 overflow-hidden">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: Info & Socials */}
            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="space-y-4" variants={slideIn("left")}>
                <span className="text-sm font-mono uppercase text-primary tracking-widest">
                  Get in Touch
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-balance">
                  Have a project in mind? Let's talk.
                </h1>
                <p className="text-lg text-foreground/70">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </motion.div>

              <motion.div
                className="space-y-6 pt-6 border-t border-border"
                variants={staggerContainer}
              >
                {contactDetails.map((detail, i) => (
                  <motion.div key={detail.title} className="flex items-start gap-4" variants={slideIn("left", i * 0.1)}>
                    <div className="p-3 bg-muted text-primary rounded-lg border border-border">
                      {detail.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{detail.title}</h4>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          // --- INI PERBAIKANNYA ---
                          // Atribut 'target' hanya ditambahkan jika link BUKAN 'mailto:'
                          target={!detail.href.startsWith("mailto:") ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{detail.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="flex gap-4 pt-6 border-t border-border" variants={slideIn("left", 0.4)}>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="p-3 bg-muted text-foreground/70 hover:text-primary rounded-lg border border-border transition-colors"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              className="bg-muted/50 border border-border rounded-xl p-8"
              initial="initial"
              whileInView="animate"
              variants={slideIn("right")}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" placeholder="john.doe@example.com" type="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Hi Aliif, I'd like to talk about..." rows={5} value={formData.message} onChange={handleInputChange} required />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <> <Loader2 className="w-4 h-4 animate-spin" /> Sending... </>
                  ) : (
                    <> Send Message <SendHorizontal className="w-4 h-4" /> </>
                  )}
                </Button>
                {submissionStatus === 'success' && (
                   <p className="text-sm text-green-500 flex items-center gap-2 justify-center pt-2">
                     <CheckCircle2 size={16}/> Message sent successfully! I'll get back to you soon.
                   </p>
                )}
                 {submissionStatus === 'error' && (
                   <p className="text-sm text-red-500 text-center pt-2">
                     Oops! Something went wrong. Please try again later.
                   </p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}