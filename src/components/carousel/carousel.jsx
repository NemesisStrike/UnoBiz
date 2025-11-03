import "./carousel.css";
import Carousel1 from "../../assets/img/carousel/Carousel1.png"
import Carousel2 from "../../assets/img/carousel/Carousel2.png"
import Carousel3 from "../../assets/img/carousel/Carousel3.png"

const Carousel = () => {
  return (
    <div
      id="heroCarousel"
      className="container-carousel carousel slide"
      data-bs-ride="carousel"
      style={{ maxHeight: "500px", overflow: "hidden", position:"relative" }}
    >
      {/* Indicator */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Carousel1}
            className="d-block w-100 img-fluid"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Solusi untuk UMKM Modern</h5>
            <p>Bangun usahamu bersama platform digital terpercaya.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Carousel2}
            className="d-block w-100 img-fluid"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Ekosistem Digital Terpadu</h5>
            <p>Hubungkan bisnis dan pelanggan dengan lebih mudah.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={Carousel3}
            className="d-block w-100 img-fluid"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Dukungan untuk Pertumbuhan</h5>
            <p>Kembangkan potensi bisnismu dengan teknologi terkini.</p>
          </div>
        </div>
      </div>

      {/* Control button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Sebelumnya</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Selanjutnya</span>
      </button>
    </div>
  );
};

export default Carousel;
