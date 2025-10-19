"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  Upload,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

// Interface diperbarui
interface Testimonial {
  _id: string;
  name: string;
  description: string;
  stars: number;
  status?: string; // Status sekarang dari user
  photo?: string | null; // Foto adalah URL atau null
}

// Komponen Kartu Testimoni
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="group relative bg-card/50 border border-border rounded-xl p-6 break-inside-avoid cursor-default backdrop-blur-sm"
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
          {/* FOTO SEKARANG PERSISTEN */}
          {testimonial.photo && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            {/* STATUS SEKARANG DINAMIS */}
            <p className="text-sm text-foreground/60">
              {testimonial.status || "Client"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ... (Komponen StarRatingInput tidak perlu diubah)
const StarRatingInput = ({ rating, setRating }: { rating: number; setRating: (rating: number) => void; }) => {
    const [hoverRating, setHoverRating] = useState(0);
    return (
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => {
          const value = i + 1;
          return (
            <button type="button" key={value} onClick={() => setRating(value)} onMouseEnter={() => setHoverRating(value)} onMouseLeave={() => setHoverRating(0)} className="cursor-pointer transition-transform duration-200 hover:scale-125" >
              <Star size={24} className={ value <= (hoverRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-border" } />
            </button>
          );
        })}
      </div>
    );
};

// Komponen Utama Halaman
export default function Testimonials({
  addTestimonialAction,
  testimonialsData,
}: {
  addTestimonialAction: (formData: FormData) => Promise<any>;
  testimonialsData: Testimonial[];
}) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [formData, setFormData] = useState({ name: "", description: "", status: "" });
  const [rating, setRating] = useState(5);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, [testimonialsData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    const data = new FormData(e.currentTarget);
    data.append('stars', rating.toString());
    try {
      const result = await addTestimonialAction(data);
      if (result && result.success) {
        setSubmissionStatus("success");
        formRef.current?.reset();
        setFormData({ name: "", description: "", status: "" });
        setRating(5);
        setSelectedFile(null);
      } else {
        setSubmissionStatus("error");
        console.error("Submission failed:", result?.error);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("An unexpected error occurred:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* ✅✅✅ BAGIAN YANG HILANG, SAYA KEMBALIKAN DI SINI ✅✅✅ */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-primary text-3xl">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About Me
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition">
              Projects
            </Link>
            <Link href="/testimonials" className="font-semibold text-primary">
              Testimonials
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 text-balance"
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
      {/* ✅✅✅ BATAS AKHIR BAGIAN YANG HILANG ✅✅✅ */}

      {/* Grid Testimoni */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial._id} testimonial={testimonial} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Formulir Testimoni */}
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
              <label className="block text-sm font-semibold text-foreground mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Your Role / Status *
              </label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
                placeholder="e.g., Client, Project Manager"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Your Testimonial *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Share your experience working with me..."
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Rating *
              </label>
              <StarRatingInput rating={rating} setRating={setRating} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
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
            
             <AnimatePresence>
              {submissionStatus === "success" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-green-500 flex items-center gap-2 justify-center" >
                  <CheckCircle2 size={16} /> Thank you for your feedback!
                </motion.p>
              )}
              {submissionStatus === "error" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-red-500 flex items-center gap-2 justify-center" >
                  <XCircle size={16} /> Oops! Something went wrong.
                </motion.p>
              )}
            </AnimatePresence>

          </form>
        </div>
      </section>
    </div>
  );
}