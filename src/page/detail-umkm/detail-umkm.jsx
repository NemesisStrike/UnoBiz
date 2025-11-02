import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import "./detail-umkm.css";
import { useState } from "react";
import ProdukUnggulan from "../../components/produkUnggulan/produkUnggulan";
import MenuUmkm from "../../components/menuUMKM/menuUMKM";

const DetailUmkm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!state) {
    return (
      <div className="text-center p-5">
        <p>Data tidak ditemukan.</p>
        <button className="btn btn-success" onClick={() => navigate(-1)}>
          Kembali
        </button>
      </div>
    );
  }

  const umkm = state.data;
  const images = Array.isArray(umkm.gambar) ? umkm.gambar : [umkm.gambar];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="detail-umkm-page">
      <Header />

      <section className="detail-container">
        {/* Gambar utama */}
        <div className="detail-left">
          <div className="slider-container">
            <img
              src={images[currentIndex]}
              alt={umkm.nama}
              className="main-image"
            />
            <div className="overlay">
              <h1 className="umkm-name">{umkm.nama}</h1>
              <p className="umkm-category">{umkm.kategori}</p>
            </div>

            {images.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevSlide}>❮</button>
                <button className="nav-btn right" onClick={nextSlide}>❯</button>
              </>
            )}
          </div>
        </div>

        {/* Informasi */}
        <div className="detail-right">
          <p><i className="bi bi-geo-alt-fill"></i> {umkm.lokasi}</p>
          <p><i className="bi bi-telephone-fill"></i> {umkm.kontak?.telepon || "-"}</p>
          <p><i className="bi bi-clock-fill"></i> Jam Operasional : Dateng - Balik</p>
          <p><i className="bi bi-check-circle-fill"></i> Status : Buka</p>

          <div className="icon-row">
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-geo-alt"></i>
            <i className="bi bi-share-fill"></i>
          </div>

          <button onClick={() => navigate(-1)} className="btn-back">
            ← Kembali
          </button>
        </div>
      </section>

      <ProdukUnggulan namaUmkm={umkm.nama} />
      <MenuUmkm namaUmkm={umkm.nama} />

      {/* 🌍 Peta Lokasi */}
      {umkm.latitude && umkm.longitude && (
        <section className="map-section">
          <h2 className="map-title">Lokasi UMKM</h2>
          <div className="map-container">
            <iframe
              title="map-umkm"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${parseFloat(umkm.latitude)},${parseFloat(umkm.longitude)}&hl=id&z=15&output=embed`}
            ></iframe>
          </div>
        </section>
      )}

    </main>
  );
};

export default DetailUmkm;
