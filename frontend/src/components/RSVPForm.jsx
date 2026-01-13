import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code'; 

const RSVPForm = () => {
  const [formData, setFormData] = useState({ name: '', status: 'Hadir', pax: 1, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketData, setTicketData] = useState(null); 

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // --- PERBAIKAN DI SINI ---
      // Kita harus tampung hasilnya ke dalam variabel 'const res'
      // Biar bisa dibaca datanya di bawah
      const res = await axios.post('http://10.122.176.43:5000/api/rsvp', formData);
      
      console.log("Respon Server:", res.data); // Cek di console biar yakin

      // Sekarang 'res' sudah dikenali, jadi kode ini bakal jalan:
      if (res.data.qr_code) {
        setTicketData({
          name: res.data.name,
          qr_code: res.data.qr_code,
          status: formData.status
        });
      } else {
        alert("Data masuk, tapi tiket tidak ada di respon server.");
      }

    } catch (error) {
      console.error(error);
      alert("Gagal mengirim data. Cek koneksi backend atau IP address.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- TAMPILAN JIKA SUDAH SUKSES (MODE TIKET) ---
  if (ticketData) {
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl border-2 border-amber-500 text-center relative overflow-hidden"
      >
        {/* Hiasan Pita */}
        <div className="absolute top-0 left-0 w-full h-4 bg-amber-500"></div>
        
        <h3 className="text-2xl font-cursive text-amber-700 mb-2">Tiket Resepsi</h3>
        <p className="text-stone-500 text-sm mb-6">Silakan screenshot tiket ini</p>
        
        {/* QR Code */}
        <div className="bg-white p-4 rounded-lg shadow-inner inline-block border border-stone-200 mb-4">
          <QRCode 
            value={ticketData.qr_code} 
            size={180} 
            fgColor="#B45309" 
          />
        </div>

        <h2 className="text-xl font-bold text-stone-800 uppercase">{ticketData.name}</h2>
        <div className="mt-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full inline-block font-bold text-sm">
          {ticketData.status}
        </div>
        
        <p className="mt-6 text-xs text-stone-400">
          Tunjukkan QR Code ini di meja penerima tamu untuk check-in.
        </p>

        <button 
          onClick={() => setTicketData(null)}
          className="mt-8 text-stone-400 underline text-sm hover:text-amber-600"
        >
          Isi RSVP lagi
        </button>
      </motion.div>
    );
  }

  // --- TAMPILAN FORMULIR ---
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-stone-100"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">Nama Lengkap</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 outline-none" placeholder="Nama Anda"/>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Konfirmasi</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 outline-none">
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Jumlah</label>
            <select name="pax" value={formData.pax} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 outline-none">
              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Orang</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">Ucapan</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-amber-500 outline-none" placeholder="Doa restu..."></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-lg text-white font-bold bg-amber-600 hover:bg-amber-700 transition-all shadow-lg">
          {isSubmitting ? 'Mengirim...' : 'Kirim Konfirmasi'}
        </button>
      </form>
    </motion.div>
  );
};

export default RSVPForm;