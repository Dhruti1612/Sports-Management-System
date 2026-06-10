import { useState } from "react";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="mobile-menu-btn">
          {menuOpen ? (
            <FiX onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu onClick={() => setMenuOpen(true)} />
          )}
        </div>

        <div className="logo">
          ⚽ TurfMaster
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Bookings</li>
          <li>Sports</li>
          <li>About</li>
        </ul>

        <div className="nav-right">
          <FiBell className="bell-icon" />
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>

      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Bookings</a>
        <a href="#">Sports</a>
        <a href="#">About</a>
        <a href="#">Notifications</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </>
  );
}

export default Navbar;