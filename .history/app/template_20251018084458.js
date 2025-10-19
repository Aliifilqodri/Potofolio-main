"use client"

import { motion } from "framer-motion"

// Varian untuk efek "Eclipse"
const variants = {
  // State Awal: Halaman baru berada di luar layar sebelah kanan
  hidden: { opacity: 0, x: "100vw" },
  
  // State Akhir: Halaman baru masuk ke posisi tengah layar
  enter: { opacity: 1, x: "0vw" },
  
  // State Keluar: Halaman lama keluar ke arah kiri layar
  exit: { opacity: 0, x: "-100vw" },
}

export default function Template({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      // Kunci kehalusannya ada di sini!
      transition={{ 
        type: "spring",       // Tipe transisi yang lebih natural
        stiffness: 100,       // Tingkat "kekakuan" pegas
        damping: 20,          // Tingkat redaman untuk menghentikan getaran
        duration: 0.75 
      }}
    >
      {children}
    </motion.main>
  )
}