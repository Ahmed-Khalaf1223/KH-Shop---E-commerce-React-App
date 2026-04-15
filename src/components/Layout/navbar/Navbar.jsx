import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="navbar-section">
      <div className="container ">
        <nav className="navbar-container">
          <div className="logo-menu">
            <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
              <HiOutlineMenu />
            </div>
            <div className="logo">
              <Link to="/">SHOP.CO</Link>
            </div>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <div>
              <Link to="/products" state={{ reset: true }}>
                Products
              </Link>
            </div>
            <div>
              <Link to="/#top-selling">Top Sale</Link>
            </div>
            <div>
              <Link to="/#new-arrivals">New Arrivals</Link>
            </div>
            <div>
              <Link to="/#brands">Brands</Link>
            </div>
          </ul>
          <SearchInput searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        </nav>
        {searchOpen && (
          <div className="mobile-search">
            <div className="search-overlay">
              <SearchInput
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
              />
            </div>
          </div>
        )}
      </div>
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="menu-header">
          <div className="icon-close">
            <HiOutlineX onClick={() => setMenuOpen(false)} />
          </div>
          <div className="menu-links">
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/#top-selling" onClick={() => setMenuOpen(false)}>
              Top Sale
            </Link>
            <Link to="/#new-arrivals" onClick={() => setMenuOpen(false)}>
              New Arrivals
            </Link>
            <Link to="/#brands" onClick={() => setMenuOpen(false)}>
              Brands
            </Link>
          </div>
        </div>
        <div className="menu-footer">
          <h2>SHOP.CO</h2>
          <div className="social-icons">
            <FaTwitter /> <FaFacebook /> <FaInstagram /> <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
