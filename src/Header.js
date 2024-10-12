import "./Header.css"
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [isActive,setISActive]=useState(false);
  const toggle = () => {
    setISActive(!isActive);
  }
  return (
    <>
      <div className= {isActive ? "header-section show" : "header-section"}>
          <span className="logo">COPPER</span>
          <ul className= {isActive ? "nav-list show" : "nav-list"}>
            <li onClick={toggle}><a href="#about">Home</a></li>
            <li onClick={toggle}><a href="#">Commands</a></li>
            <li onClick={toggle}><a href="#features">Features</a></li>
            <li onClick={toggle}><a href="#">Supports</a></li>
          </ul>
      </div>
      <span className="toggle-btn" onClick={toggle}>
        <FaBarsStaggered />
      </span>
    </>
  )
}

export default Header