import React, { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- SETTING PASSWORD DI SINI ---
    // Ganti 'admin123' dengan password yang Abang mau
    if (password === 'admin123') {
      // Simpan "Kunci" di browser biar gak perlu login terus-terusan
      localStorage.setItem('isAdmin', 'true');
      // Refresh halaman biar langsung masuk Dashboard
      window.location.reload();
    } else {
      setError('Password salah bos!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-stone-200">
        <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">Login Admin</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-stone-600 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-amber-500 outline-none"
              placeholder="Masukkan password..."
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}

          <button 
            type="submit" 
            className="w-full py-3 rounded-lg bg-stone-800 text-white font-bold hover:bg-stone-900 transition"
          >
            Masuk Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;