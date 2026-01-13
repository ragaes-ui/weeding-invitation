import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Location = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-cursive text-amber-600 mb-8 animate-fade-in-up">Waktu & Tempat</h2>
        
        {/* --- KARTU ACARA (GRID) --- */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Kartu Akad */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-stone-50 p-8 rounded-2xl shadow-lg border border-stone-100"
          >
            <h3 className="text-2xl font-serif text-stone-800 mb-2">Akad Nikah</h3>
            <div className="flex justify-center items-center gap-2 text-amber-600 mb-4">
              <FaClock /> <span>08.00 WIB - 10.00 WIB</span>
            </div>
            <p className="text-stone-600">
              Masjid Agung Al-Jabar<br />
              Jl. Cimincrang No.14, Gedebage, Kota Bandung
            </p>
          </motion.div>

          {/* Kartu Resepsi */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-stone-50 p-8 rounded-2xl shadow-lg border border-stone-100"
          >
            <h3 className="text-2xl font-serif text-stone-800 mb-2">Resepsi</h3>
            <div className="flex justify-center items-center gap-2 text-amber-600 mb-4">
              <FaClock /> <span>11.00 WIB - Selesai</span>
            </div>
            <p className="text-stone-600">
              Ballroom Harris Hotel<br />
              Jl. Peta No.241, Suka Asih, Kota Bandung
            </p>
          </motion.div>
        </div>

        {/* --- GOOGLE MAPS EMBED --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl border-4 border-white"
        >
          {/* GANTI SRC DI BAWAH INI DENGAN LINK EMBED MAPS LOKASI ASLI ABANG */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.339247079237!2d107.57564637499696!3d-6.969248993031383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8d8a7c2e391%3A0x6b77242857476834!2sHarris%20Hotel%20%26%20Conventions%20Festival%20Citylink%20Bandung!5e0!3m2!1sid!2sid!4v1705035272183!5m2!1sid!2sid" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <div className="mt-8">
          <a 
            href="https://goo.gl/maps/contohLinkLokasi" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-stone-800 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition shadow-lg"
          >
            <FaMapMarkerAlt /> Buka di Google Maps
          </a>
        </div>

      </div>
    </section>
  );
};

export default Location;