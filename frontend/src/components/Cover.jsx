import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Cover = ({ onOpen }) => {
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to'); 
    if (name) {
      setGuestName(name);
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      // Animasi keluar: geser ke atas (y: -100vh) dan hilang
      exit={{ y: '-100vh', opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }} 
      // PERBAIKAN DISINI:
      // 1. z-[100] agar paling depan
      // 2. bg-stone-900 agar ada warna dasar gelap jika gambar belum load
      // 3. h-screen w-screen dan fixed inset-0 agar menutupi seluruh layar
      className="fixed inset-0 z-[100] h-screen w-screen bg-stone-900 bg-[url('https://images.unsplash.com/photo-1519225469958-19e5db410918?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* Overlay Gelap (Dipergelap jadi 70% biar text lebih jelas) */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 text-center px-4 pb-20"> {/* Tambah pb-20 biar agak naik dikit di HP */}
        <h3 className="text-xl tracking-[0.2em] mb-4 animate-fade-in-up font-sans uppercase">The Wedding Of</h3>
        <h1 className="text-6xl md:text-7xl font-cursive text-amber-100 mb-8 animate-fade-in-up delay-100">Pria & Wanita</h1>
        
        <div className="border-t border-b border-white/30 py-6 mb-10 animate-fade-in-up delay-200 max-w-xs mx-auto">
          <p className="text-sm mb-2 font-sans">Kepada Yth Bapak/Ibu/Saudara/i</p>
          <h2 className="text-2xl md:text-3xl font-bold font-serif capitalize text-amber-200">{guestName}</h2>
        </div>

        <button 
          onClick={onOpen}
          className="group flex items-center justify-center gap-3 mx-auto bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full transition-all shadow-lg shadow-amber-600/30 animate-bounce-slow font-bold tracking-wide"
        >
          <FaEnvelopeOpenText className="text-xl group-hover:rotate-12 transition-transform" /> 
          Buka Undangan
        </button>
      </div>
    </motion.div>
  );
};

export default Cover;