// TestimonialPage.tsx

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

// ✨ 1. INTERFACE DIPERBARUI DENGAN STATUS
interface Testimonial {
  _id: string;
  name: string;
  description: string;
  stars: number;
  photo?: string;
  status?: string; // <-- Tambahan field status
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
            {/* ✨ 4. TAMPILKAN STATUS SECARA DINAMIS */}
            <p className="text-sm text-foreground/60">
              {testimonial.status || "Client"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Komponen Input Rating Bintang Interaktif
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

// Komponen Utama Halaman
export default function Testimonials({
  handleSubmitDB,
  testimonialsData,
}: {
  handleSubmitDB: (data: {
    name: string;
    description: string;
    status: string; // <-- Tambahkan status di tipe props
    stars: string;
    photo?: string;
  }) => Promise<any>;
  testimonialsData: Testimonial[];
}) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsData);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState("Client"); // ✨ 2. STATE BARU UNTUK STATUS
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, [testimonialsData]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // ✨ 5. KIRIM DATA STATUS KE SERVER ACTION
      const result = await handleSubmitDB({
        name: formData.name,
        description: formData.description,
        status: status, // <-- Kirim status
        stars: rating.toString(),
        photo: selectedFile ? selectedFile.name : undefined,
      });

      if (result && !result.error) {
        const newTestimonial: Testimonial = {
          _id: result.insertedId,
          name: formData.name,
          description: formData.description,
          status: status, // <-- Tambahkan status ke objek baru
          stars: rating,
          photo: selectedFile ? URL.createObjectURL(selectedFile) : undefined,
        };

        setTestimonials((prev) => [newTestimonial, ...prev]);
        
        // Reset form
        setFormData({ name: "", description: "" });
        setRating(5);
        setStatus("Client"); // <-- Reset status ke default
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigasi */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        {/* ... (kode navigasi tidak berubah) ... */}
      </nav>

      {/* Header */}
      <section className="py-20 text-center">
        {/* ... (kode header tidak berubah) ... */}
      </section>

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
            {/* ... (kode judul form tidak berubah) ... */}
          </div>

          <form
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

            {/* ✨ 3. TAMBAHKAN DROPDOWN UNTUK STATUS */}
            <div>
              <label htmlFor="status-select" className="block text-sm font-semibold text-foreground mb-2">
                I am a... *
              </label>
              <select
                id="status-select"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition appearance-none"
              >
                <option value="Client">Client</option>
                <option value="Collaborator">Collaborator</option>
                <option value="Colleague">Colleague</option>
                <option value="Student">Student</option>
              </select>
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
            
            {/* ... (sisa kode form tidak berubah) ... */}

          </form>
        </div>
      </section>
    </div>
  );
}