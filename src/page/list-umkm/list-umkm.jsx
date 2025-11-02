import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProductCard from "../../components/productCard/productCard";
import umkmData from "../../json/umkm.json";
import "./list-umkm.css";
import { useState } from "react";
import DetailProduct from "../detail-product/detail-product"; // ✅ tambahkan import

const ListUmkm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterKategori, setFilterKategori] = useState("");
  const [filterLokasi, setFilterLokasi] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ modal state

  const itemsPerPage = 10;

  const filteredData = umkmData.filter((item) => {
    const matchNama = item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchKategori = filterKategori ? item.kategori === filterKategori : true;
    const matchLokasi = filterLokasi ? item.lokasi === filterLokasi : true;
    return matchNama && matchKategori && matchLokasi;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  
  // const handleClick = (umkm) => {
  //   navigate("/detail-umkm", { state: { data: umkm } });
  // };
  const handleClick = (umkm) => {
    setSelectedProduct(umkm); // ✅ buka modal
  };

  return (
    <div className="list-umkm">
      <Header />

      <div className="list-hero">
        <p>Kunjungi. Kenali. Dukung<br /> UMKM Indonesia!</p>

        <div className="filters-container">
          <div className="input-group">
            <input type="text" placeholder="Cari UMKM.." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <i className="bi bi-search"></i>
          </div>

          <div className="filters-select">
            <select onChange={(e)=>setFilterKategori(e.target.value)}>
              <option value="">Kategori</option>
              <option>Makanan</option>
              <option>Minuman</option>
              <option>Jasa</option>
              <option>Pakaian</option>
            </select>

            <select onChange={(e)=>setFilterLokasi(e.target.value)}>
              <option value="">Lokasi</option>
              <option>Cikarang</option>
              <option>Cibitung</option>
              <option>Jakarta</option>
            </select>
          </div>
        </div>
      </div>

      <div className="list-content row">
        {paginatedData.length > 0 ? (
          paginatedData.map((umkm) => (
            <ProductCard
              key={umkm.id}
              title={umkm.nama}
              imgSrc={umkm.gambar}
              onClick={() => handleClick(umkm)} // ✅ klik → modal
            />
          ))
        ) : (
          <p className="no-data">Tidak ada hasil ditemukan.</p>
        )}
      </div>

      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>&lt;</button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page => page === currentPage || page === currentPage - 1 || page === currentPage + 1)
          .map((page) => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>&gt;</button>
      </div>

      <Footer />

      {/* ✅ Modal Overlay */}
      {selectedProduct && (
        <DetailProduct data={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default ListUmkm;
