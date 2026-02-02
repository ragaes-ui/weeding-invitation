import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion'; 

// Import Komponen
import Cover from './components/Cover'; 
import Hero from './components/Hero';
import Couple from './components/Couple'; 
import Story from './components/Story';   
import Countdown from './components/Countdown';
import Gallery from './components/Gallery'; 
import Location from './components/Location'; 
import Gift from './components/Gift';         
import RSVPForm from './components/RSVPForm';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isPlaying, setIsPlaying] = useState(false);
  
  // --- UPDATE PENTING: Pakai useRef biar Audio stabil ---
  const audioRef = useRef(null); 

  useEffect(() => {
    // Inisialisasi Audio cuma sekali pas web dibuka
    // Pastikan file 'titiknadir.mp3' ada di folder 'public'
    audioRef.current = new Audio('/Kotainitaksamatanpamu.mp3'); 
    audioRef.current.loop = true; // Lagu ngulang terus

    // Cleanup saat keluar
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // --- LOGIKA SCROLL (Biar gak bocor pas di Cover) ---
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed'; // PENTING BUAT HP
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.position = 'static';
    }
  }, [isOpen]);

  // Fungsi saat tombol "Buka Undangan" diklik
  const handleOpenInvitation = () => {
    setIsOpen(true);
    
    // Play Audio
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.error("Gagal play audio:", e);
          // Kalau mau nge-cek error di HP, nyalakan alert di bawah ini:
          // alert("Gagal putar lagu. Coba klik icon musik manual.");
        });
    }
  };

  return (
    <div className="font-sans antialiased bg-stone-50 text-stone-900 overflow-x-hidden">
      
      {/* 1. COVER SCREEN */}
      <AnimatePresence>
        {!isOpen && (
          <Cover onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT */}
      <Hero />
      
      <section className="py-16 px-6 text-center bg-stone-900 text-stone-300">
         <div className="max-w-2xl mx-auto animate-fade-in-up">
           <p className="italic text-lg mb-4 font-serif">
             "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri..."
           </p>
           <p className="font-bold text-amber-500">— QS. Ar-Rum: 21</p>
         </div>
      </section>

      <Couple />
      <Countdown />
      <Story />
      <Gallery />
      <Location />
      <Gift />

      <section className="py-20 px-4 bg-gradient-to-b from-white to-stone-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-cursive text-amber-600 mb-2">RSVP</h2>
          <p className="text-stone-500 max-w-md mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
          </p>
        </div>
        <RSVPForm />
      </section>

      <footer className="bg-stone-900 text-stone-400 text-center py-10 border-t border-stone-800">
        <h3 className="font-cursive text-3xl text-stone-200 mb-4">Raga Esa Pratama & Silviana Putri</h3>
        <p className="text-sm mb-6">Terima kasih atas doa dan restu Anda</p>
        <p className="opacity-40 text-xs">&copy; 2026 RCELLTECH ID WITH LOVE.</p>
      </footer>

      {/* 3. MUSIC PLAYER */}
      {/* Kirim audioRef.current sebagai props */}
      {isOpen && (
        <MusicPlayer 
          audio={audioRef.current} 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
        />
      )}
      
    </div>
  );
}

export default App;
