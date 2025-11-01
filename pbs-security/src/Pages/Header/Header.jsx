import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="position-fixed top-0 start-0 end-0 bg- bg-dark pacity-95 border-bottom shadow-sm"
      style={{ backdropFilter: "blur(6px)", zIndex: 1050 }}
    >
      <nav className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <div
          className="d-flex align-items-center gap-2 text-white text-decoration-none"
          style={{ cursor: "pointer" }}
        >
          {/* Shield Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="gold"
            viewBox="0 0 24 24"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          </svg>

          <span className="fs-4 fw-bold">
            Elite <span className="gold">Guard</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex align-items-center gap-4">
          {["Home", "About Us", "Services", "Testimonials", "Contact Us"].map(
            (item) => (
              <button
                key={item}
                className="btn btn-link text-white fw-medium text-decoration-none p-0"
                style={{
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#fdf90dff")}
                onMouseOut={(e) => (e.target.style.color = "#fdf90dff")}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="btn d-md-none text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="position-absolute top-100 start-0 end-0 bg-light border-top d-md-none text-center py-3">
            {["Home", "About Us", "Services", "Testimonials", "Contact Us"].map(
              (item) => (
                <div key={item} className="py-2">
                  <button
                    className="btn btn-link text-dark fw-medium text-decoration-none"
                    onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                    onMouseOut={(e) => (e.target.style.color = "black")}
                  >
                    {item}
                  </button>
                </div>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
