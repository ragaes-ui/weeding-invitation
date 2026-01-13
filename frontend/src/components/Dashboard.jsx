import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaSignOutAlt } from 'react-icons/fa'; 

const Dashboard = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- FUNGSI AMBIL DATA ---
  const fetchData = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.get(`${API_URL}/api/rsvps`);
      setGuests(res.data);
      setLoading(false);
    } catch (error) {
      alert("Gagal mengambil data. Pastikan backend nyala.");
      setLoading(false);
    }
  };

  // --- FUNGSI HAPUS DATA ---
  const handleDelete = async (id) => {
    if (window.confirm("Yakin mau hapus data ini?")) {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        await axios.delete(`${API_URL}/api/rsvps/${id}`);
        setGuests(guests.filter(guest => guest.id !== id));
        alert("Data berhasil dihapus!");
      } catch (error) {
        alert("Gagal menghapus data.");
      }
    }
  };

  // --- FUNGSI LOGOUT ---
  const handleLogout = () => {
    if (window.confirm("Yakin mau keluar?")) {
      localStorage.removeItem('isAdmin'); 
      window.location.reload(); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPax = guests.reduce((sum, guest) => sum + guest.pax, 0);

  return (
    <div className="min-h-screen bg-stone-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto"> {/* Saya lebarin dikit biar muat semua */}
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-800">Dashboard Resepsi</h1>
            <p className="text-stone-500">Kelola data tamu undangan</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-stone-200">
              <span className="block text-xs text-stone-400 uppercase tracking-wider">Total Pax</span>
              <span className="text-2xl font-bold text-amber-600">{totalPax} Orang</span>
            </div>

            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition shadow-sm"
            >
              <FaSignOutAlt /> Keluar
            </button>
          </div>
        </div>

        {/* TABEL DATA LENGKAP */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-stone-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-stone-600">Nama Tamu</th>
                  <th className="px-6 py-4 text-sm font-bold text-stone-600">Status</th>
                  <th className="px-6 py-4 text-sm font-bold text-stone-600">Jumlah</th>
                  <th className="px-6 py-4 text-sm font-bold text-stone-600">Pesan</th>
                  {/* INI YANG KEMARIN HILANG: */}
                  <th className="px-6 py-4 text-sm font-bold text-stone-600">Tiket ID</th>
                  <th className="px-6 py-4 text-sm font-bold text-stone-600 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {loading ? (
                  <tr><td colSpan="6" className="text-center py-8">Memuat data...</td></tr>
                ) : guests.length === 0 ? (
                  <tr><td colSpan="6" className="text-center py-8">Belum ada tamu.</td></tr>
                ) : (
                  guests.map((guest) => (
                    <tr key={guest.id} className="hover:bg-stone-50 transition">
                      <td className="px-6 py-4 font-medium text-stone-800">{guest.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          guest.status === 'Hadir' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {guest.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-stone-600">{guest.pax} org</td>
                      <td className="px-6 py-4 text-sm text-stone-500 max-w-xs truncate">{guest.message}</td>
                      
                      {/* INI DATA TIKETNYA (Muncul 8 huruf depan aja biar rapi) */}
                      <td className="px-6 py-4 font-mono text-xs text-amber-600">
                        {guest.qr_uuid ? guest.qr_uuid.substring(0, 8) + '...' : '-'}
                      </td>
                      
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => handleDelete(guest.id)}
                          className="p-2 bg-stone-100 text-stone-400 rounded-lg hover:bg-red-100 hover:text-red-600 transition"
                          title="Hapus Data"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <button onClick={fetchData} className="mt-6 text-stone-500 text-sm hover:text-stone-800 underline">
          Refresh Data Manual
        </button>

      </div>
    </div>
  );
};

export default Dashboard;