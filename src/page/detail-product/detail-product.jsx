import "./detail-product.css";
import { useState } from "react";
import Category1 from "../../assets/img/category/Category1.png";
import Category2 from "../../assets/img/category/Category2.png";
import Category3 from "../../assets/img/category/Category3.png";
import Category4 from "../../assets/img/category/Category4.png";

const DetailProduct = ({ data, onClose }) => {
  const images = data.images?.length
    ? data.images
    : [Category1, Category2, Category3, Category4].slice(0, 3);

  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedImage = images[currentIndex];

  return (
    <div className="detail-main">
      <div className="detail-container d-flex flex-wrap">

        <div className="detail-left position-relative">
          <img src={selectedImage} alt={data.nama} className="detail-main-img" />

          <button className="nav-btn left" onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}>
            &#10094;
          </button>
          <button className="nav-btn right" onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
            &#10095;
          </button>

          <div className="title-overlay">{data.nama}</div>
        </div>

        <div className="detail-right">
          <button className="close-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>

          <h3 className="detail-title">{data.nama}</h3>
          <p className="detail-desc">{data.deskripsi || "Tidak ada deskripsi"}</p>
          <p className="detail-price">Rp. {data.harga || "XXX.XXX"}</p>

          <div className="thumb-row">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={`thumb-img ${i === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailProduct;
