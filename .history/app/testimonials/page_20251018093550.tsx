"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react"; // Tambahkan useEffect
import { Star, Loader2 } from "lucide-react"; // Tambahkan Loader
import { motion, AnimatePresence } from "framer-motion"; // Untuk animasi keren!

// Interface tidak perlu diubah
interface Testimonial {
  _id: string; // MongoDB menggunakan _id
  name: string;
  description: string;
  stars: number;
  photo?: string;
}

export default function Testimonials() {
  // State akan dimulai dengan array kosong
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading data awal

  // --- MENGAMBIL DATA DARI DATABASE SAAT HALAMAN DIBUKA ---
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        const { data } = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // State form tetap sama
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stars: 5,
    photo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stars" ? Number.parseInt(value) : value,
    }));
  };

  // --- FUNGSI SUBMIT BARU YANG MENGIRIM DATA KE API ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          photo: formData.photo || "/diverse-user-avatars.png",
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const { data: newTestimonial } = await res.json();

      // Tambahkan testimoni baru ke atas daftar dengan animasi
      setTestimonials((prev) => [newTestimonial, ...prev]);
      setFormData({ name: "", description: "", stars: 5, photo: "" }); // Reset form
    } catch (error) {
      console.error("Failed to submit testimonial:", error);
      // Tambahkan notifikasi error jika perlu
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
            <Link href="/testimonials" className="font-semibold text-primary">
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-20 bg-background border-b border-border">
        {/* ... (Header Anda tetap sama) ... */}
        <div className="max-w-6xl mx-auto px-4">
                   {" "}
          <div className="text-center space-y-4">
                       {" "}
            <h1 className="text-5xl md:text-6xl font-black text-balance">
              What People Say
            </h1>
                       {" "}
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                            Real feedback from clients and collaborators I've
              had the pleasure of working with.            {" "}
            </p>
                     {" "}
          </div>
                 {" "}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <AnimatePresence>
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial._id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 cursor-default"
                >
                  {/* ... (Isi Kartu Testimonial tetap sama, hanya ganti 'id' menjadi '_id') ... */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="relative z-10 space-y-4">
                                     {" "}
                    <div className="flex gap-1">
                                         {" "}
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
                                       {" "}
                    </div>
                                     {" "}
                    <p className="text-foreground/80 leading-relaxed italic">
                      "{testimonial.description}"
                    </p>
                                     {" "}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                         {" "}
                      {testimonial.photo && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                                 {" "}
                          <Image
                            src={testimonial.photo || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                                               {" "}
                        </div>
                      )}
                                         {" "}
                      <div>
                                             {" "}
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                                             {" "}
                        <p className="text-sm text-foreground/60">Client</p>   
                                       {" "}
                      </div>
                                       {" "}
                    </div>
                                   {" "}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <div className="col-span-full flex justify-center items-center py-10">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            )}
          </div>

          {/* ... (Divider dan Form tetap sama) ... */}
          <div className="h-px bg-border my-20" />
          <div className="max-w-2xl mx-auto">
                       {" "}
            <div className="text-center mb-12">
                           {" "}
              <h2 className="text-4xl font-black mb-4">Share Your Feedback</h2> 
                         {" "}
              <p className="text-foreground/60">
                Have you worked with me? I'd love to hear about your experience!
              </p>
                         {" "}
            </div>
                       {" "}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border rounded-xl p-8"
            >
              {/* ... Isi form tidak berubah, hanya button submit yang diupdate ... */}
              <div>
                               {" "}
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Name *
                </label>
                               {" "}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
                             {" "}
              </div>
              <div>
                               {" "}
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Your Testimonial *
                </label>
                               {" "}
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Share your experience working with me..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                />
                             {" "}
              </div>
              <div>
                               {" "}
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Rating *
                </label>
                               {" "}
                <select
                  name="stars"
                  value={formData.stars}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                >
                                   {" "}
                  <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>                 {" "}
                  <option value={4}>⭐⭐⭐⭐ 4 Stars</option>                 {" "}
                  <option value={3}>⭐⭐⭐ 3 Stars</option>                 {" "}
                  <option value={2}>⭐⭐ 2 Stars</option>                 {" "}
                  <option value={1}>⭐ 1 Star</option>               {" "}
                </select>
                             {" "}
              </div>
              <div>
                               {" "}
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Photo URL (Optional)
                </label>
                               {" "}
                <input
                  type="url"
                  name="photo"
                  value={formData.photo}
                  onChange={handleInputChange}
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
                             {" "}
              </div>
                           {" "}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold flex items-center justify-center gap-2"
              >
                               {" "}
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />} 
                             {" "}
                {isSubmitting ? "Submitting..." : "Submit Testimonial"}         
                   {" "}
              </Button>
                         {" "}
            </form>
                     {" "}
          </div>
        </div>
      </section>
    </div>
  );
}
