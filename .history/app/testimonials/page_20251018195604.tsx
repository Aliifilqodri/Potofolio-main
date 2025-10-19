"use client";
import Link from "next/link";
import type React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  description: string;
  stars: number;
  photo?: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      description:
        "Aliif is an exceptional developer! The attention to detail and creative solutions were outstanding. Highly recommend!",
      stars: 5,
      photo: "/professional-woman-portrait.png",
    },
    {
      id: "2",
      name: "Michael Chen",
      description:
        "Working with Aliif was a game-changer for our project. The UI/UX design was intuitive and the code quality was impeccable.",
      stars: 5,
      photo: "/professional-man-portrait.png",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      description:
        "Great communication and problem-solving skills. Delivered the project on time with excellent results.",
      stars: 4,
      photo: "/professional-woman-smiling.png",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stars: 5,
  });
  // New state to hold the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    // Handle file input separately
    if (e.target.type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setSelectedFile(files[0]);
      }
    } else {
      // Handle other inputs
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === "stars" ? Number.parseInt(value) : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        stars: formData.stars,
        // Create a temporary URL for the uploaded file to display it
        photo: selectedFile
          ? URL.createObjectURL(selectedFile)
          : "/diverse-user-avatars.png",
      };
      setTestimonials((prev) => [newTestimonial, ...prev]);
      // Reset form and file state
      setFormData({ name: "", description: "", stars: 5 });
      setSelectedFile(null);
      // Optional: If you want to clear the file input visually, you might need a ref
      // e.target.reset();
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-sm">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-foreground/70 transition"
            >
              About Me
            </Link>
            <Link
              href="/skills"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Skills & Tools
            </Link>
            <Link
              href="/projects"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Experience
            </Link>
            <Link
              href="/testimonials"
              className="text-foreground hover:text-foreground/70 transition font-semibold"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-balance">
              What People Say
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Real feedback from clients and collaborators I've had the pleasure
              of working with.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-foreground/20 hover:-translate-y-1 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                <div className="relative z-10 space-y-4">
                  {/* Stars */}
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

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.description}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {testimonial.photo && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.photo || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-foreground/60">Client</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-20" />

          {/* Testimonial Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">Share Your Feedback</h2>
              <p className="text-foreground/60">
                Have you worked with me? I'd love to hear about your
                experience!
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card border border-border rounded-xl p-8"
            >
              {/* Name */}
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
                />
              </div>

              {/* Description */}
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition resize-none"
                />
              </div>

              {/* Stars */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Rating *
                </label>
                <select
                  name="stars"
                  value={formData.stars}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                  <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                  <option value={3}>⭐⭐⭐ 3 Stars</option>
                  <option value={2}>⭐⭐ 2 Stars</option>
                  <option value={1}>⭐ 1 Star</option>
                </select>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Photo (Optional)
                </label>
                <input
                  type="file"
                  name="photo"
                  accept="image/*" // Hint to the browser to only accept image files
                  onChange={handleInputChange}
                  className="w-full text-sm text-foreground
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-primary-foreground
                    hover:file:bg-primary/90 transition-colors cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-foreground/90 py-3 font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit Testimonial"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}