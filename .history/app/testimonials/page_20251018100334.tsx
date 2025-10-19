"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stars: 5,
    photo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load data dari API
  useEffect(() => {
    fetch("/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Failed to load testimonials", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "stars" ? Number.parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setTestimonials((prev) => [data, ...prev]);
        setFormData({ name: "", description: "", stars: 5, photo: "" });
      } else {
        alert("Failed to submit testimonial");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Aliif<span className="text-sm">.</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-foreground/70">
              Home
            </Link>
            <Link href="/testimonials" className="font-semibold">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-foreground/70">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 text-center border-b border-border">
        <h1 className="text-5xl font-black mb-4">What People Say</h1>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Real feedback from clients and collaborators I've had the pleasure of
          working with.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group bg-card border border-border rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < t.stars
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-border"
                    }
                  />
                ))}
              </div>
              <p className="italic text-foreground/80 mb-4">
                "{t.description}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={t.photo || "/diverse-user-avatars.png"}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-foreground/60">Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-4">Share Your Feedback</h2>
            <p className="text-foreground/60">
              Have you worked with me? I'd love to hear your experience!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card border border-border rounded-xl p-8"
          >
            <div>
              <label className="font-semibold mb-2 block">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-background border border-border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold mb-2 block">
                Your Testimonial *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 bg-background border border-border rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold mb-2 block">Rating *</label>
              <select
                name="stars"
                value={formData.stars}
                onChange={handleInputChange}
                className="w-full p-3 bg-background border border-border rounded-lg"
              >
                <option value={5}>⭐⭐⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={1}>⭐</option>
              </select>
            </div>

            <div>
              <label className="font-semibold mb-2 block">
                Photo URL (Optional)
              </label>
              <input
                type="url"
                name="photo"
                value={formData.photo}
                onChange={handleInputChange}
                placeholder="https://example.com/photo.jpg"
                className="w-full p-3 bg-background border border-border rounded-lg"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-foreground/90 py-3 font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit Testimonial"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
