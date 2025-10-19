"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
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
              className="text-foreground hover:text-foreground/70 transition"
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/70">Hi there! I'm Aliif,</p>
            <h1 className="text-7xl md:text-8xl font-black leading-tight text-balance">
              UI/UX Designer
            </h1>
            <h2 className="text-4xl md:text-5xl font-light text-foreground/80 text-balance">
              & Content Creator
            </h2>
            <p className="text-lg text-foreground/60">
              based in Jakarta, Indonesia.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/projects">
                <Button className="bg-foreground text-background hover:bg-foreground/90">
                  See My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Let's Talk</Button>
              </Link>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="relative w-full h-96">
              <Image
                src="/professional-portrait-young-man.jpg"
                alt="Aliif - UI/UX Designer and UI/UX Designer"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Rect",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Figma",
              "Express.js",
              "Prisma",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted text-foreground rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
