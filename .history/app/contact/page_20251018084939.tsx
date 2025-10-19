"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"; // Impor Label untuk form
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
  SendHorizontal,
} from "lucide-react";

// --- DATA KONTAK & SOSIAL MEDIA ---
const contactDetails = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "Aliifmugi3@gmail.com",
    href: "mailto:Aliifmugi3@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+62 857 4925 7423",
    href: "https://wa.me/6285749257423",
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
    href: "https://github.com/Aliifmugi", // Ganti dengan link Anda
    label: "GitHub",
  },
  {
    icon: <Linkedin />,
    href: "https://linkedin.com/in/Aliif-mugi", // Ganti dengan link Anda
    label: "LinkedIn",
  },
  {
    icon: <Instagram />,
    href: "https://instagram.com/Aliifmugi", // Ganti dengan link Anda
    label: "Instagram",
  },
];

// --- VARIAN ANIMASI ---
const slideIn = (direction = "left") => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
  },
});

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
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
            <Link
              href="/skills"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
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
            <Link href="/contact" className="font-semibold text-primary">
              Contact Me
            </Link>
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
            variants={slideIn("left")}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4">
              <span className="text-sm font-mono uppercase text-primary tracking-widest">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-balance">
                Have a project in mind? Let's talk.
              </h1>
              <p className="text-lg text-foreground/70">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="p-3 bg-muted text-primary rounded-lg border border-border">
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{detail.title}</h4>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6 border-t border-border">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
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
              ))}
            </div>
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
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  placeholder="john.doe@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Hi Aliif, I'd like to talk about..."
                  rows={5}
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send Message
                <SendHorizontal className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
