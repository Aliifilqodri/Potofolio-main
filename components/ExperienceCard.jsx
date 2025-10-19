"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ExperienceCard = ({ experience }) => {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);

  return (
    <motion.div
      className="relative flex items-start gap-8 p-8 border border-border bg-card/50 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Kolom Ikon */}
      <div className="hidden sm:block mt-1 text-primary">{experience.icon}</div>

      {/* Konten Utama (Deskripsi) */}
      <div className="flex-1">
        <p className="text-sm text-foreground/60">{experience.duration}</p>
        <h3 className="text-xl font-bold mt-1">{experience.role}</h3>
        <p className="font-semibold text-primary">{experience.company}</p>
        <p className="mt-4 text-foreground/80">{experience.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* --- BAGIAN FOTO INTERAKTIF --- */}
      {experience.image && (
        <>
          {/* Panel Foto yang Bisa Geser */}
          <motion.div
            className="absolute top-0 right-0 h-full w-full sm:w-2/5 bg-black"
            initial={{ x: "100%" }}
            animate={{ x: isPhotoVisible ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <Image
              src={experience.image}
              alt={`${experience.role} at ${experience.company}`}
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </motion.div>

          {/* Tombol "Tarik Aku" */}
          <motion.button
            onClick={() => setIsPhotoVisible(!isPhotoVisible)}
            className="absolute top-1/2 left-auto right-0 z-10 flex items-center justify-center bg-primary text-primary-foreground py-4 px-2 rounded-l-lg shadow-lg"
            animate={{
              x: isPhotoVisible ? "-100%" : 0, // Geser tombol bersama panel
              right: isPhotoVisible ? "calc(40% - 1px)" : "0px", // Sesuaikan posisi
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span
              className="font-bold uppercase text-sm"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Tarik Aku
            </span>
            <AnimatePresence mode="wait">
              {isPhotoVisible ? (
                <motion.div key="right" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ChevronRight className="w-5 h-5 mt-2" />
                </motion.div>
              ) : (
                <motion.div key="left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ChevronLeft className="w-5 h-5 mt-2" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </>
      )}
    </motion.div>
  );
};