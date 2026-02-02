import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io'; // Import ikon close

// --- KONFIGURASI FOTO ---
// Ganti path ini sesuai lokasi foto Abang.
// Bisa di folder public (e.g., "/images/foto1.jpg") atau link external (Cloudinary)
const photos = [
  "/images/SquarePic_20250402_08152219.jpg", 
  "/images/SquarePic_20250907_19341094.jpg",
  "/images/SquarePic_20250804_22475855.jpg",
  "/images/Ragaindahmirror.jpg",
  "/images/Ber2-pic.png",
  "/images/Mirror-raga.jpeg",
  "/images/Nobi-pic.jpg", // Tambahin aja kalau banyak
  "/images/Love-pic.jpg",
];

const Gallery = () => {
  // State untuk menyimpan foto mana yang sedang dibuka (fullscreen)
  // Kalau null artinya tidak ada yang dibuka.
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-16 px-4 bg-stone-50" id="gallery">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-cursive text-amber-700 mb-3 animate-fade-in-up">Galeri Foto</h2>
        <p className="text-stone-600 italic max-w-md mx-auto animate-fade-in-up delay-100">
          "Setiap detik yang kita lalui bersama adalah memori indah yang terukir dalam bingkai keabadian."
        </p>
      </div>

      {/* --- GRID FOTO MASONRY --- */}
      {/* Menggunakan CSS Columns untuk layout Pinterest-style */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-6xl mx-auto">
        {photos.map((src, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }} // Delay bertingkat agar muncul bergantian
            viewport={{ once: true, margin: "-50px" }}
            className="break-inside-avoid overflow-hidden rounded-xl shadow-md"
          >
            <img 
              src={src} 
              alt={`Moment ${index + 1}`} 
              onClick={() => setSelectedImg(src)} // KLIK FOTO UNTUK BUKA LIGHTBOX
              className="w-full h-auto hover:scale-110 transition-transform duration-500 cursor-zoom-in object-cover"
              loading="lazy" // Optimasi loading agar website tidak berat
            />
          </motion.div>
        ))}
      </div>

      {/* --- LIGHTBOX MODAL (FULLSCREEN) --- */}
      {/* AnimatePresence menangani animasi saat modal ditutup (hilang dari DOM) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            // Backdrop gelap, klik di sini untuk menutup modal
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)} 
          >
            {/* Tombol Close di pojok kanan atas */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl transition bg-black/20 p-2 rounded-full z-10"
              onClick={() => setSelectedImg(null)}
            >
              <IoMdClose />
            </button>

            {/* Foto Fullscreen */}
            <motion.img 
              src={selectedImg} 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              alt="Fullscreen view"
              // max-h-[90vh] agar tinggi foto tidak melebihi 90% layar
              className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl pointer-events-auto"
              // stopPropagation penting! Agar saat klik FOTO, modalnya tidak tertutup.
              // Modal hanya tertutup kalau klik area hitam di sekelilingnya.
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
