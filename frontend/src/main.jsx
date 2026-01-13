import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx' // Import Login tadi
import './index.css'

const path = window.location.pathname;

// Cek apakah user sudah pernah login sebelumnya
const isAuthenticated = localStorage.getItem('isAdmin') === 'true';

// Logika Ganti Halaman
let ComponentToRender;

if (path === '/admin') {
  if (isAuthenticated) {
    // Kalau link /admin DAN sudah login -> Tampilkan Dashboard
    ComponentToRender = <Dashboard />;
  } else {
    // Kalau link /admin TAPI belum login -> Tampilkan Login
    ComponentToRender = <Login />;
  }
} else {
  // Kalau link biasa -> Tampilkan Undangan
  ComponentToRender = <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {ComponentToRender}
  </React.StrictMode>,
)