import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    year: "2018",
    title: "Pertama Bertemu",
    desc: "Kami bertemu di kantin kampus saat hujan deras. Payung yang tertinggal menjadi awal percakapan kami."
  },
  {
    year: "2020",
    title: "Menyatakan Cinta",
    desc: "Setelah 2 tahun berteman dekat, Romeo akhirnya memberanikan diri menyatakan perasaan di puncak bukit bintang."
  },
  {
    year: "2025",
    title: "Lamaran",
    desc: "Disaksikan keluarga besar, kami mengikat janji untuk melangkah ke jenjang yang lebih serius."
  }
];

const Story = () => {
  return (
    <section className="py-20 px-4 bg-stone-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-cursive text-center text-amber-600 mb-12">Kisah Cinta Kami</h2>
        
        <div className="relative border-l-2 border-amber-300 ml-4 md:ml-10 pl-8 space-y-12">
          {stories.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Titik Bulat di Garis */}
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-amber-500 rounded-full border-4 border-white shadow"></div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <span className="text-amber-600 font-bold text-lg">{item.year}</span>
                <h3 className="text-xl font-serif text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;