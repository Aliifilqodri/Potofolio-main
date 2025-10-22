"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion"; // <-- 1. TAMBAHKAN Variants
import { Testimonial } from "../types/testimonial";
import { Star, Quote, Upload, Loader2, X } from "lucide-react";
import toast from "react-hot-toast";

// --- 2. TAMBAHKAN KOMPONEN LINK ANIMASI ---
const MotionLink = motion(Link);

// 🔹 Komponen Kartu Testimoni
const TestimonialCard = ({
  testimonial,
  onImageClick,
}: {
  testimonial: Testimonial;
  onImageClick: (src: string, alt: string) => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="group relative bg-card/50 border border-border rounded-xl p-8 break-inside-avoid cursor-default backdrop-blur-sm"
    >
      <Quote
        className="absolute top-4 right-4 w-12 h-12 text-border/20 transform transition-transform duration-300 group-hover:scale-110"
        strokeWidth={1.5}
      />
      <div className="relative z-10 space-y-4">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < testimonial.stars
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-border"
              }
            />
          ))}
        </div>
        <p className="text-foreground/80 leading-relaxed italic">
          "{testimonial.description}"
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          {testimonial.photo && (
            <div
              className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-border cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => onImageClick(testimonial.photo!, testimonial.name)}
            >
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                fill
                className="object-cover"
                unoptimized={true}
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-foreground/60">
              {testimonial.status || "Client"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 🔹 Komponen Input Rating Bintang
const StarRatingInput = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (rating: number) => void;
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, i) => {
        const value = i + 1;
        return (
          <button
            type="button"
            key={value}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHoverRating(value)}
            onMouseLeave={() => setHoverRating(0)}
            className="cursor-pointer transition-transform duration-200 hover:scale-125"
          >
            <Star
              size={24}
              className={
                value <= (hoverRating || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-border"
              }
            />
          </button>
        );
      })}
    </div>
  );
};

// --- 3. TAMBAHKAN SEMUA VARIAN UNTUK MENU BARU ---
const mobileDrawerVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      delayChildren: 0.2,
      staggerChildren: 0.08,
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const linkFadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// --- 4. TAMBAHKAN KOMPONEN IKON HAMBURGER ANIMASI ---
const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  const variant = isOpen ? "open" : "closed";
  const top = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 8 },
  };
  const middle = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottom = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -8 },
  };

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={variant}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={top}
      />
      <motion.path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={middle}
      />
      <motion.path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={bottom}
      />
    </motion.svg>
  );
};

// 🔹 Komponen Utama
export default function Testimonials({
  addTestimonialAction,
  testimonialsData,
}: {
  addTestimonialAction: (formData: FormData) => Promise<any>;
  testimonialsData: Testimonial[];
}) {
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(testimonialsData);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
  });
  const [rating, setRating] = useState(5);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // --- 5. TAMBAHKAN STATE & HANDLER UNTUK MENU ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, [testimonialsData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    data.append("stars", rating.toString());

    if (!formData.name || !formData.description || !formData.status) {
      toast.error("Semua kolom wajib diisi!");
      return;
    }

    setIsSubmitting(true);

    const submitPromise = addTestimonialAction(data);

    await toast.promise(submitPromise, {
      loading: "Mengirim testimoni...",
      success: (result) => {
        if (result && result.success) {
          formRef.current?.reset();
          setFormData({ name: "", description: "", status: "" });
          setRating(5);
          setSelectedFile(null);
          return "Terima kasih atas feedback Anda!";
        } else {
          throw new Error(result?.error || "Gagal mengirim testimoni.");
        }
      },
      error: (err) => `Gagal: ${err.message}`,
    });

    setIsSubmitting(false);
  };

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- 6. GANTI BLOK <nav> LAMA DENGAN YANG BARU --- */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>

          {/* Navigasi Desktop (breakpoint 'lg') */}
          <div className="hidden lg:flex gap-8">
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
            <Link
              href="/testimonials"
              className="font-semibold text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Tombol Hamburger Menu (tampil di bawah 'lg') */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <AnimatedHamburgerIcon isOpen={isMenuOpen} />
            </Button>
          </div>
        </div>
      </nav>

      {/* --- 7. TAMBAHKAN BLOK MENU DRAWER DI SINI --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Gelap */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />

            {/* Panel Menu (Glassmorphism) */}
            <motion.div
              key="drawer"
              variants={mobileDrawerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background/80 backdrop-blur-lg flex flex-col items-center justify-center gap-10 lg:hidden"
            >
              <MotionLink
                href="/"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Home
              </MotionLink>
              <MotionLink
                href="/about"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                About Me
              </MotionLink>
              <MotionLink
                href="/skills"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Skills & Tools
              </MotionLink>
              <MotionLink
                href="/projects"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Projects
              </MotionLink>
              <MotionLink
                href="/experience"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Experience
              </MotionLink>
              <MotionLink
                href="/testimonials"
                className="text-2xl font-semibold text-primary" // Highlight halaman ini
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Testimonials
              </MotionLink>
              <MotionLink
                href="/contact"
                className="text-2xl text-foreground hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
                variants={linkFadeInUp}
              >
                Contact Me
              </MotionLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🔸 Header Section */}
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
        >
          Voices of Collaboration
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-foreground/60 max-w-2xl mx-auto mt-4"
        >
          Real feedback from clients and collaborators I've had the pleasure of
          working with.
        </motion.p>
      </section>

      {/* 🔸 Grid Testimonial */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial._id || testimonial.name}
                testimonial={testimonial}
                onImageClick={openImageModal}
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 🔸 Formulir Testimonial */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Share Your Feedback</h2>
            <p className="text-foreground/60">
              Have you worked with me? I'd love to hear about your experience!
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card/50 border border-border rounded-xl p-8 backdrop-blur-sm"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Role / Status *
              </label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                placeholder="e.g., Client, Project Manager"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Your Testimonial *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Share your experience..."
                className="w-full px-4 py-3 bg-background border border-border rounded-lg resize-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">
                Rating *
              </label>
              <StarRatingInput rating={rating} setRating={setRating} />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Photo (Optional)
              </label>
              <label
                htmlFor="file-upload"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-background border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition"
              >
                <Upload size={16} />
                <span>
                  {selectedFile ? selectedFile.name : "Choose a file"}
                </span>
              </label>
              <input
                id="file-upload"
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 py-3 font-semibold flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Submitting...
                </>
              ) : (
                "Submit Testimonial"
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* 🔸 Modal Gambar */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative bg-card rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute top-2 right-2 p-2 bg-background/50 text-foreground rounded-full hover:bg-background transition z-20"
              >
                <X size={24} />
              </button>
              <div className="relative w-full h-full max-w-[80vw] max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  quality={90}
                  unoptimized
                />
              </div>
              <p className="absolute bottom-2 left-0 right-0 text-center text-sm text-foreground/80 bg-black/50 p-2 pointer-events-none">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}