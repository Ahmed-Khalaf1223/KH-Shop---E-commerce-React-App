import React, { useEffect, useState, useRef, useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { ProductContext } from "../../../context/ProductContext";

function SearchInput({ searchOpen, setSearchOpen }) {
  const { cartItems, products, setSearchQuery } = useContext(ProductContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchRef = useRef(null);

  // 🔍 debounce search
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }

      const filtered = products
        .filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .slice(0, 5);

      setSuggestions(filtered);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm, products]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      setSearchQuery(searchTerm);
      navigate("/products");
      setSearchOpen?.(false);
    }

    setSuggestions([]);
  };

  return (
    <>
      {/*  SEARCH BAR */}
      <form className="search_bar" onSubmit={handleSubmit} ref={searchRef}>
        <IoIosSearch />
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* suggestions */}
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setSearchQuery(item.title);
                  navigate(`/products/${item.id}`);
                  setSuggestions([]);
                  setSearchOpen?.(false);
                }}
              >
                <img src={item.thumbnail} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* NAV ICONS */}
      <div className="nav_icons">
        <div
          className="search_bar_mobile"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <IoIosSearch />
        </div>

        <div className="cart_icon_shop" onClick={() => navigate("/cart")}>
          <BsCart2 />
          {totalQuantity > 0 && (
            <span className="number_cart">{totalQuantity}</span>
          )}
        </div>

        <div className="Person_Circle">
          <IoPersonCircleOutline />
        </div>
      </div>
    </>
  );
}

export default SearchInput;
