import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingCart, Search } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cartSlice";
import { selectFavoritesCount } from "../../store/favoritesSlice";
import "./Header.scss";

import logo from "./imgs/Logo.png";

const navLinks = ["Landscapes", "Portraits", "Architecture", "Macro", "Urban"];

export default function Header() {
  const cartCount = useSelector(selectCartCount);
  const favCount = useSelector(selectFavoritesCount);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="logo__link">
            <img src={logo} alt="PhotoStore logo" className="logo__image" />
          </Link>
        </div>

        <nav className="header__nav">
          {navLinks.map((text) => (
            <NavLink
              key={text}
              to={`/${text.toLowerCase()}`}
              className={({ isActive }) =>
                `nav__link ${isActive ? "active" : ""}`
              }
            >
              {text}
            </NavLink>
          ))}
        </nav>

        {/* пошук */}
        <div className="header__search">
          <Search size={18} className="header__search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="header__search-input"
          />
        </div>

        {/* іконки праворуч */}
        <div className="header__actions">
          <NavLink
            to="/favorites"
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            <button className="icon-btn">
              <Heart size={20} />

              {favCount > 0 && <span className="badge">{favCount}</span>}
            </button>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => `link ${isActive ? "active" : ""}`}
          >
            <button className="icon-btn ml-2">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
