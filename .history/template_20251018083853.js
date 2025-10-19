"use client"

import { motion } from "framer-motion"

// Definisikan varian animasinya
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 }, // Mulai dari kiri
  enter: { opacity: 1, x: 0, y: 0 },    // Masuk ke tengah
  exit: { opacity: 0, x: 0, y: -100 },  // Keluar ke atas
}

export default function Template({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"    // State awal saat komponen masuk
      animate="enter"     // State saat komponen selesai masuk
      exit="exit"         // State saat komponen keluar
      transition={{ type: "linear", duration: 0.5 }} // Atur transisi
    >
      {children}
    </motion.main>
  )
}