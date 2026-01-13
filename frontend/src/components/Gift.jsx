import React from 'react';
import { FaRegCopy, FaGift } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Gift = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Nomor Rekening Berhasil Disalin!');
  };

  return (
    <section className="py-16 px-4 bg-stone-50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 text-amber-600 text-4xl flex justify-center">
            <FaGift />
        </div>
        <h2 className="text-3xl font-cursive text-stone-800 mb-4">Wedding Gift</h2>
        <p className="text-stone-500 mb-8 text-sm">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
          Namun jika memberi adalah ungkapan tanda kasih Anda, kami ucapkan terima kasih.
        </p>

        {/* Kartu Bank 1 */}
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md border border-stone-200 mb-4"
        >
          <div className="flex justify-between items-center mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" alt="BCA" className="h-4" />
            <span className="text-xs font-bold text-stone-400">BANK BCA</span>
          </div>
          <p className="text-lg font-mono font-bold text-stone-800 mb-1">123 456 7890</p>
          <p className="text-sm text-stone-600 mb-4">a.n Pria (Mempelai Pria)</p>
          
          <button 
            onClick={() => handleCopy('1234567890')}
            className="flex items-center justify-center gap-2 w-full bg-stone-100 py-2 rounded text-sm text-stone-700 hover:bg-stone-200 transition"
          >
            <FaRegCopy /> Salin No. Rekening
          </button>
        </motion.div>

        {/* Kartu Bank 2 (Opsional) */}
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md border border-stone-200"
        >
          <div className="flex justify-between items-center mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg" alt="BRI" className="h-8" />
            <span className="text-xs font-bold text-stone-400">BANK BRI</span>
          </div>
          <p className="text-lg font-mono font-bold text-stone-800 mb-1">0000 1111 2222</p>
          <p className="text-sm text-stone-600 mb-4">a.n Wanita (Mempelai Wanita)</p>
          
          <button 
            onClick={() => handleCopy('000011112222')}
            className="flex items-center justify-center gap-2 w-full bg-stone-100 py-2 rounded text-sm text-stone-700 hover:bg-stone-200 transition"
          >
            <FaRegCopy /> Salin No. Rekening
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Gift;