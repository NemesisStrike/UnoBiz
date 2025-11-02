import { useState } from "react";
import DataProduk from "../../json/DataProduk.json";
import "./MenuUmkm.css";

const MenuUmkm = ({ namaUmkm }) => {
  const produkList = DataProduk[namaUmkm] || [];
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(produkList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = produkList.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  if (produkList.length === 0) {
    return (
      <section className="menu-section text-center text-light">
        <h2>Menu {namaUmkm}</h2>
        <p>Tidak ada menu yang tersedia.</p>
      </section>
    );
  }

  return (
    <div className="menu-bg">
      {/* 🔹 Judul Menu di luar card */}
      <h2 className="menu-title text-dark text-start">MENU</h2>

      <div className="menu-wrapper">
        <section className="menu-section">
          {/* Grid Produk */}
          <div className="menu-grid">
            {currentItems.map((produk, idx) => (
              <div className="menu-card" key={idx}>
                <img
                  src={produk.Gambar}
                  alt={produk["Nama Produk"]}
                  className="menu-img"
                />
                <div className="menu-info">
                  <h5>{produk["Nama Produk"]}</h5>
                  <p>Rp. {produk["Harga"]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ❮
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="page-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ❯
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MenuUmkm;
