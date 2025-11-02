import { useState } from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { BsFlower1 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header-container">
      <div className="top-bar">
        <div className="left-logo">
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
          <BsFlower1 size={28} className="logo-icon" />
        </div>

        <div className="center-logo">
          <h2 className="logo-text">LOGO</h2>
        </div>

        <div className="icon-section">
          <CiSearch size={24} className="icon" />
          <CiHeart size={24} className="icon" />
          <CiShoppingCart size={24} className="icon" />
          <IoPersonOutline size={22} className="icon" />
          <div className="language-selector">
            <span>ENG</span>
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>
      </div>
      <nav className={`bottom-bar ${menuOpen ? "active" : ""}`}>
        <ul className="navigation-menu">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
