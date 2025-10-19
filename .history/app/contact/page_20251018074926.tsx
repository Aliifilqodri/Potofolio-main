"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
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

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-2">Let's get in touch.</h2>
              <p className="text-foreground/60 mb-8">
                Have a project in mind or just want to say hi? Feel free to drop
                a message!
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your name
                  </label>
                  <Input placeholder="Ex. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input placeholder="Ex. johndoe@mail.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea placeholder="Write your message here" rows={5} />
                </div>
                <Button className="bg-foreground text-background hover:bg-foreground/90 w-full">
                  Send message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-block mb-8 p-4 border-2 border-foreground rounded">
                  <p className="text-sm font-mono">Contact Me</p>
                </div>
              </div>

              <div>
                <h3 className="text-5xl md:text-6xl font-black leading-tight text-balance mb-8">
                  You made it to the end — high five!
                </h3>
                <p className="text-lg text-foreground/70">
                  If anything here caught your eye, let's talk! I'm always up
                  for new ideas, fun projects, or just a good convo.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-border">
                <div>
                  <h4 className="font-semibold mb-2">Let's talk</h4>
                  <p className="text-foreground/70">+62 857 4925 7423</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Where I'm based</h4>
                  <p className="text-foreground/70">Jakarta, Indonesia</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Say hello</h4>
                  <p className="text-foreground/70">Aliifmugi3@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Find me online</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-foreground transition"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-foreground transition"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-foreground/70 hover:text-foreground transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
