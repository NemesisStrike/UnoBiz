import { useState } from "react";
import DataProduk from "../../json/DataProduk.json";
import "./MenuUmkm.css";

const MenuUmkm = ({ namaUmkm }) => {
  const produkList = DataProduk[namaUmkm] || [];
  const itemsPerPage = 12; // tampil 12 produk per halaman
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman
  const totalPages = Math.ceil(produkList.length / itemsPerPage);

  // Tentukan data yang ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = produkList.slice(startIndex, startIndex + itemsPerPage);

  // Fungsi pagination
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
    <section className="menu-section">
      <h2 className="text-dark text-start mb-3">Menu</h2>

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
  );
};

export default MenuUmkm;
