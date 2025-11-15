import Carousel from '../../components/carousel/carousel';
import CategoryCard from '../../components/categoryCard/categoryCard';
import Header from '../../components/header/header';
import Category1 from "../../assets/img/category/Category1.png"
import Category2 from "../../assets/img/category/Category2.png"
import Category3 from "../../assets/img/category/Category3.png"
import Category4 from "../../assets/img/category/Category4.png"
import Why1 from "../../assets/img/why/Why1.png"
import Why2 from "../../assets/img/why/Why2.png"
import Why3 from "../../assets/img/why/Why3.png"
import Why4 from "../../assets/img/why/Why4.png"
import BackgroundSearch from "../../assets/img/BackgroundSearch.png"
import "./dashboard.css";
import ProductCard from '../../components/productCard/productCard';
import Footer from '../../components/footer/footer';
import umkmData from "../../json/umkm.json";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const images = [Why1, Why2, Why3, Why4];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterKategori, setFilterKategori] = useState("");
  const [filterLokasi, setFilterLokasi] = useState("");
  const navigate = useNavigate();

  const handleClick = (to="/",data) => {
    navigate(to,{state:{data}}); // pindah ke halaman list UMKM
  };

  // Filter data berdasarkan input user
  const filteredData = umkmData.filter((item) => {
    const matchNama = item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchKategori = filterKategori ? item.kategori === filterKategori : true;
    const matchLokasi = filterLokasi ? item.lokasi === filterLokasi : true;
    return matchNama && matchKategori && matchLokasi;
  });

    return (
        <>
            <main id='dashboard' className="main-dashboard">
                <Header />
                <Carousel />

                <section className='section-category'>
                    <CategoryCard imgSrc={Category1} title='Makanan'/>
                    <CategoryCard imgSrc={Category2} title='Minuman'/>
                    <CategoryCard imgSrc={Category3} title='Jasa'/>
                    <CategoryCard imgSrc={Category4} title='Pakaian'/>
                </section>

                <section id='section-search' className='w-100 d-flex section-search'>
                    <img src={BackgroundSearch} alt="search-bar-img" className='w-100 position-reltive'/>
                    <div className="overlay w-100 d-flex text-center">
                        <p>Kunjungi, Kenali, Dukung<br /> UMKM Indonesia</p>
                        <div className="input-group">
                          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="form-control bg-transparent border-0 text-white" placeholder="Cari nama.."/>
                          <span className="input-group-text bg-transparent border-0">
                            <i className="bi bi-search"></i>
                          </span>
                        </div>
                        <div className="filters">
                            <select onChange={(e) => setFilterKategori(e.target.value)}>
                                <option value="">Kategori</option>
                                <option>Makanan</option>
                                <option>Minuman</option>
                                <option>Jasa</option>
                                <option>Pakaian</option>
                                <option>Kerajinan</option>
                            </select>

                            <select onChange={(e) => setFilterLokasi(e.target.value)}>
                                <option value="">Lokasi</option>
                                <option>Cikarang</option>
                                <option>Cibitung</option>
                                <option>Jakarta</option>
                            </select>

                            <select>
                                <option value="">Jarak</option>
                                <option>{'< 1 km'}</option>
                                <option>{'< 5 km'}</option>
                                <option>{'< 10 km'}</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section id='section-produk' className="section-produk w-100">
                    <div className="top">
                        <button onClick={()=>handleClick("list-umkm")}>Jelajahi lebih banyak</button>
                    </div>
                    <div className="produk d-flex justify-content-center">
                        {filteredData.length > 0 ? (
                          filteredData.slice(0, 10).map((umkm) => (
                            <ProductCard
                              key={umkm.id}
                              title={umkm.nama}
                              imgSrc={umkm.gambar}
                              onClick={() => handleClick(`detail-umkm`, umkm)}
                            />
                          ))
                        ) : (
                          <p className="text-center text-muted mt-3">Tidak ada hasil ditemukan.</p>
                        )}
                    </div>
                </section>

                <section id='section-why' className="section-why w-100">
                  <div className="why-title mx-auto">Kenapa Pakai UnoBiz</div>
                
                  <div className="container mt-4">
                    <div className="row g-3 justify-content-center">
                      {images.map((img, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
                          <div className="why-card">
                            <img src={img} alt={`why-${index}`} className="why-img img-fluid" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <Footer/>
            </main>
        </>
    );
};

export default Dashboard;
