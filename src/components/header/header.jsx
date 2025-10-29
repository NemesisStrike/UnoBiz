import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo 1.png";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Tutup menu saat resize ke layar besar
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992 && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Disable body scroll ketika menu mobile terbuka
  useEffect(() => {
    const className = "no-scroll-when-menu-open";
    if (menuOpen && window.innerWidth < 992) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    return () => document.body.classList.remove(className);
  }, [menuOpen]);

  // Animasi buka/tutup agar halus tanpa sisa ruang
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    if (menuOpen) {
      // Saat dibuka: tampilkan elemen, lalu animasi height
      nav.style.display = "block";
      requestAnimationFrame(() => {
        nav.style.maxHeight = nav.scrollHeight + "px";
        nav.style.opacity = "1";
      });
    } else {
      // Saat ditutup: animasi tutup dulu, baru disembunyikan
      nav.style.maxHeight = "0";
      nav.style.opacity = "0";
      const timeout = setTimeout(() => {
        nav.style.display = "none";
      }, 400); // sesuai durasi CSS transition
      return () => clearTimeout(timeout);
    }
  }, [menuOpen]);

  return (
    <header
      className="w-100 px-4 d-flex justify-content-between align-items-center flex-wrap"
      style={{
        backgroundColor: "#1E3A8A",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center">
        <img
          src={Logo}
          alt="UnoBiz Logo"
          style={{ height: "60px", marginRight: "10px" }}
        />
      </div>

      {/* Tombol toggle hanya muncul di mobile/tablet */}
      <button
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        className="btn d-lg-none text-white border-0"
        onClick={() => setMenuOpen((s) => !s)}
      >
        <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} fs-3`}></i>
      </button>

      {/* Menu */}
      <nav
        ref={navRef}
        className="menu-container d-lg-block"
        style={{ display: "none" }}
      >
        <ul
          className={`list-unstyled mb-0 ${
            menuOpen
              ? "d-flex flex-column align-items-start mt-3"
              : "d-flex align-items-center justify-content-end mb-0"
          } gap-3`}
        >
          <li>
            <a href="#dashboard" className="text-white text-decoration-none fw-semibold">
              Beranda
            </a>
          </li>
          <li>
            <a href="#dashboard" className="text-white text-decoration-none fw-semibold">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#section-search" className="text-white text-decoration-none fw-semibold">
              UMKM
            </a>
          </li>
          <li>
            <a href="#section-footer" className="text-white text-decoration-none fw-semibold">
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
