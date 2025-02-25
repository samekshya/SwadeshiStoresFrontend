import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";  
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext"; 
import { FiSettings } from "react-icons/fi"; // Import settings icon

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext); 

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Swadesi Store Logo" className="logo-img" />
        <p>SWADESHI-STORE</p>
      </div>

      <ul className="nav-menu">
        <li className={menu === "shop" ? "active" : ""} onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
        </li>
        <li className={menu === "clothes" ? "active" : ""} onClick={() => setMenu("clothes")}>
          <Link to="/clothes">Clothes</Link>
        </li>
        <li className={menu === "food" ? "active" : ""} onClick={() => setMenu("food")}>
          <Link to="/food">Food</Link>
        </li>
        <li className={menu === "accessories" ? "active" : ""} onClick={() => setMenu("accessories")}>
          <Link to="/accessories">Accessories</Link>
        </li>
        <li className={menu === "aboutus" ? "active" : ""} onClick={() => setMenu("aboutus")}>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className={menu === "contactus" ? "active" : ""} onClick={() => setMenu("contactus")}>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/settingspage" className="settings-icon">
          <FiSettings size={24} />
        </Link>
        <div className="cart-container">
          <Link to="/cart">
            <img src={cart_icon} alt="Cart" className="cart-img" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div> 
        </div>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
