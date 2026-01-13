const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // <--- Ini Library buat Node.js ngobrol sama MySQL
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// --- BAGIAN INI KONEKSI KE MYSQL ---
// (Kita taruh langsung di sini biar server.js gak bingung cari file lain)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  password: 'raga-kis', // <--- Sesuaikan password MySQL Abang (biasanya kosong)
  database: 'wedding_db'
});

// Cek status koneksi
db.connect((err) => {
  if (err) {
    console.error('❌ Gagal konek ke MySQL:', err.message);
  } else {
    console.log('✅ Berhasil konek ke Database MySQL!');
  }
});

// --- ROUTE UTAMA ---
app.get('/', (req, res) => {
  res.send('Backend Wedding Jalan!');
});

// --- ROUTE TERIMA RSVP ---
app.post('/api/rsvp', (req, res) => {
  const { name, status, pax, message } = req.body;
  const qr_uuid = uuidv4(); 

  const sql = "INSERT INTO rsvps (qr_uuid, name, status, pax, message) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [qr_uuid, name, status, pax, message], (err, result) => {
    if (err) {
      console.error("❌ Error SQL:", err);
      return res.status(500).json({ error: "Gagal simpan data" });
    }
    console.log(`✅ Data Masuk: ${name}`);
    res.json({ message: "Sukses", qr_code: qr_uuid, name: name });
  });
});

// --- TAMBAHAN: ROUTE AMBIL DATA (ADMIN) ---
app.get('/api/rsvps', (req, res) => {
  // Ambil semua data, urutkan dari yang terbaru
  const sql = "SELECT * FROM rsvps ORDER BY created_at DESC";
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Error ambil data:", err);
      return res.status(500).json({ error: "Gagal ambil data" });
    }
    res.json(results);
  });
});

// --- TAMBAHAN: ROUTE HAPUS DATA ---
app.delete('/api/rsvps/:id', (req, res) => {
  const { id } = req.params; // Ambil ID dari URL
  const sql = "DELETE FROM rsvps WHERE id = ?";
  
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Error Hapus:", err);
      return res.status(500).json({ error: "Gagal hapus data" });
    }
    res.json({ message: "Data berhasil dihapus" });
  });
});
// Jalankan Server
app.listen(PORT, () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
});