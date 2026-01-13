import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Ganti URL gambar di bawah dengan foto prewedding */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 blur-[2px] scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop")' }}
      ></div>
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 text-center text-white p-4"
      >
        <p className="text-sm md:text-lg tracking-[0.3em] mb-4 font-sans uppercase">The Wedding Of</p>
        <h1 className="text-6xl md:text-8xl font-cursive mb-6 text-amber-100">Pria & Wanita</h1>
        <div className="flex justify-center items-center gap-4 text-sm md:text-base font-serif">
          <span>SABTU</span>
          <span className="w-2 h-2 bg-amber-100 rounded-full"></span>
          <span>25 AGUSTUS 2026</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;