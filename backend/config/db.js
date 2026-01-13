const mysql = require('mysql2');

// Konfigurasi Koneksi Database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'raga-kis', // <--- ISI PASSWORD MYSQL ABANG (Kalau kosong biarkan '')
  database: 'wedding_db'
});

// Cek Koneksi (Biar ketahuan kalau gagal)
db.connect((err) => {
  if (err) {
    console.error('❌ Gagal konek ke Database:', err.message);
  } else {
    console.log('✅ Berhasil konek ke Database MySQL!');
  }
});

// Export biar bisa dipakai di server.js
module.exports = db;