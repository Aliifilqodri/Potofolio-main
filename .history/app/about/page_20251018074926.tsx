"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
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
              href="/contact"
              className="text-foreground hover:text-foreground/70 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="relative w-full h-96">
                <Image
                  src="/professional-portrait-young-man-holding-sign.jpg"
                  alt="Aliif"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Hey there! I'm Aliif
                </h2>
                <h3 className="text-xl text-foreground/60 mb-6">
                  All About Me
                </h3>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  A software engineering student passionate about building
                  clean, fast, and user-friendly web experiences. I'm currently
                  focused on React, Next.js, and TypeScript through real
                  projects. I also explore UI/UX design and robotics — blending
                  code and hardware to solve real problems. Learning never
                  stops, and I'm just getting started.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-foreground/60 italic mb-4">
                  "You don't have to be great to start — but you have to start
                  to be great."
                </p>
                <p className="text-foreground/70">
                  A fellow dream chaser — Alf.
                </p>
              </div>

              <div>
                <Link href="/contact">
                  <Button className="bg-foreground text-background hover:bg-foreground/90">
                    Contact Me
                  </Button>
                </Link>
              </div>

              {/* Highlight Text */}
              <div className="mt-12 space-y-4">
                <h3 className="text-4xl md:text-5xl font-black leading-tight text-balance">
                  Smart move my guy, look who's curious. You've officially
                  scrolled into my story!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
