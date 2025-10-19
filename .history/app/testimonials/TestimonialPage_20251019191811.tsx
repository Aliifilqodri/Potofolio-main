"use client";

import Link from "next/link";
import React, { useState, useRef, FormEvent } from "react";
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

// Interface (Tipe Data)
interface Testimonial {
  id: string;
  name: string;
  description: string;
  stars: number;
  photo?: string;
}

// Komponen Kartu Testimoni (Tidak ada perubahan)
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
            <p className="text-sm text-foreground/60">Client</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Komponen Input Rating Bintang Interaktif (Tidak ada perubahan)
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
export default function TestimonialPage({
  handleSubmitDB,
  testimonialsData,
}: {
  // 1. UBAH: Tipe prop diubah untuk menerima FormData dan mengembalikan Testimonial
  handleSubmitDB: (formData: FormData) => Promise<Testimonial | null>;
  testimonialsData?: Testimonial[];
}) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(
    testimonialsData ?? []
  );

  const [formData, setFormData] = useState({ name: "", description: "" });
  const [rating, setRating] = useState(5);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    // FIX: Menghapus '+' yang merupakan typo
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. UBAH: Logika handleSubmit dirombak total
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return; // Validasi sederhana

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Buat objek FormData untuk mengirim file
    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("description", formData.description);
    submissionData.append("stars", rating.toString());
    if (selectedFile) {
      submissionData.append("photo", selectedFile);
    }

    try {
      // Kirim FormData ke Server Action dan tunggu hasilnya
      const newTestimonial = await handleSubmitDB(submissionData);

      // Jika server mengembalikan data baru, update state!
      if (newTestimonial) {
        setTestimonials((prev) => [newTestimonial, ...prev]);
        setSubmissionStatus("success");

        // Reset form setelah berhasil
        setFormData({ name: "", description: "" });
        setRating(5);
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        // Jika server mengembalikan null, berarti ada error
        throw new Error("Gagal menyimpan testimoni di server.");
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
        {/* Navigasi (Tidak ada perubahan) */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            {/* ... isi nav ... */}
        </nav>

        {/* Header (Tidak ada perubahan) */}
        <section className="py-20 text-center">
            {/* ... isi header ... */}
        </section>

        {/* Grid Testimoni dengan Layout Masonry */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                <AnimatePresence>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </AnimatePresence>
            </div>
        </section>

        {/* Formulir Testimoni (Tidak ada perubahan pada JSX, hanya pada fungsi onSubmit) */}
        <section className="py-20 bg-muted/50 border-t border-border">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-4">Share Your Feedback</h2>
                    <p className="text-foreground/60">
                        Have you worked with me? I'd love to hear about your experience!
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-card/50 border border-border rounded-xl p-8 backdrop-blur-sm"
                >
                    {/* ... Semua input form tetap sama ... */}
                </form>
            </div>
        </section>
    </div>
  );
}