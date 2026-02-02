import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const Couple = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-cursive text-amber-600 mb-10 animate-fade-in-up">Mempelai</h2>
        
        {/* Container Flex */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          
          {/* --- PRIA --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
               {/* Bingkai Foto Bulat */}
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 animate-spin-slow dashed"></div>
              {/* PERBAIKAN PATH DI SINI */}
              <img 
                src="/images/Raga.mirror.jpg" 
                alt="Groom" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-cursive text-stone-800">Raga Esa Pratama</h3>
            <p className="text-sm text-stone-500 mt-2 font-bold">Putra Bpk. Wijaya & Ibu Siti</p>
            <p className="text-stone-500 text-sm mt-4 px-4">
              "Lelaki penyabar yang hobi coding dan main game, akhirnya menemukan player 2 dalam hidupnya."
            </p>
            <a href="#" className="inline-block mt-4 text-amber-600 text-xl hover:text-amber-800"><FaInstagram /></a>
          </motion.div>

          {/* Icon Love di Tengah */}
          <div className="text-4xl text-amber-400 font-cursive">&</div>

          {/* --- WANITA --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
               {/* Bingkai Foto Bulat */}
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 animate-spin-slow dashed"></div>
              {/* PERBAIKAN PATH DI SINI */}
              <img 
                src="/images/Silviana.jpeg" 
                alt="Bride" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h3 className="text-3xl font-cursive text-stone-800">Silviana Putri</h3>
            <p className="text-sm text-stone-500 mt-2 font-bold">Putri Bpk. Capulet & Ibu Maimunah</p>
            <p className="text-stone-500 text-sm mt-4 px-4">
              "Wanita mandiri yang suka traveling, kini siap memulai petualangan baru sebagai seorang istri."
            </p>
            <a href="#" className="inline-block mt-4 text-amber-600 text-xl hover:text-amber-800"><FaInstagram /></a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Couple;
