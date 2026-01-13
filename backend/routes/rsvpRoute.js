const express = require('express');
const router = express.Router();
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

// POST: Kirim RSVP
router.post('/', (req, res) => {
    const { name, status, pax, message } = req.body;
    const qr_uuid = uuidv4(); // Generate kode unik

    const query = 'INSERT INTO rsvps (qr_uuid, name, status, pax, message) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [qr_uuid, name, status, pax, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database Error' });
        }
        res.status(200).json({ message: 'RSVP Berhasil!', qrCode: qr_uuid });
    });
});

// GET: Ambil Ucapan (Wishes)
router.get('/wishes', (req, res) => {
    const query = 'SELECT name, status, message, created_at FROM rsvps ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database Error' });
        res.json(results);
    });
});

module.exports = router;