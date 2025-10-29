// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="section-footer" className="footer-section w-100">
      <div className="container py5">
        <div className="row align-items-start">
          {/* Kiri - Logo & Alamat */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h4 className="footer-logo">
              Uno<span>Biz</span>
            </h4>
            <p className="footer-address">
              Komplek Astra International Gedung B, Jl. Gaya Motor Raya <br />
              Jl. Sunter II No.8 lantai 5, RW.8, Sungai Bambu, Kec. Tj. Priok, Jkt Utara, <br />
              DKI Jakarta 14330, Indonesia
            </p>

            <div className="social-icons mt-3">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          {/* Kanan - Kontak */}
         <div className="col-12 col-md-6">
          <div className="footer-contact d-flex flex-column gap-3 align-items-center align-items-md-start text-center text-md-start">
            <div className="contact-item d-flex align-items-center gap-2">
              <i className="bi bi-telephone"></i>
              <span>+62 8122-2312-2324</span>
            </div>
            <div className="contact-item d-flex align-items-center gap-2">
              <i className="bi bi-envelope"></i>
              <span>unobiz@gmail.com</span>
            </div>
          </div>
        </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <small>&copy; 2025 UnoBiz. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
