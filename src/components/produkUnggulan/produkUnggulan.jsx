import { useState } from "react";
import DataProduk from "../../json/DataProduk.json";
import "./ProdukUnggulan.css";

const ProdukUnggulan = ({ namaUmkm, handleClick }) => {
  const semuaProduk = DataProduk[namaUmkm] || [];
  const produkList = semuaProduk.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (produkList.length === 0) {
    return (
      <section className="section-produk-unggulan text-center text-light">
        <h2>Produk Unggulan {namaUmkm}</h2>
        <p>Tidak ada produk ditemukan.</p>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % produkList.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + produkList.length) % produkList.length
    );
  };

  return (
    <>
      {/* 🔹 Judul sejajar kiri atas, sama posisi dengan Menu & Lokasi UMKM */}

      <section className="section-produk-unggulan w-100">
      <h2 className="produk-title">Produk Unggulan</h2>
        <div className="carousel">
          <button className="arrow-btn left" onClick={prevSlide}>
            ‹
          </button>

          <div className="carousel-track">
            {produkList.map((produk, idx) => {
              const position =
                (idx - currentIndex + produkList.length) % produkList.length;
              let className = "slide";

              if (position === 0) className += " active";
              else if (position === 1) className += " next";
              else if (position === produkList.length - 1) className += " prev";
              else className += " hidden";

              return (
                <div
                  key={idx}
                  className={className}
                  onClick={() =>
                    handleClick?.("detail-umkm", { namaUmkm, produk })
                  }
                >
                  <img
                    src={produk.Gambar}
                    alt={produk["Nama Produk"]}
                    className="produk-gambar"
                  />
                </div>
              );
            })}
          </div>

          <button className="arrow-btn right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </section>
    </>
  );
};

export default ProdukUnggulan;
