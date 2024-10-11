import "./Header.css"
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [isActive,setISActive]=useState(false);
  const toggle = () => {
    setISActive(!isActive);
    console.log(isActive);
  }
  return (
    <>
      <div className= {isActive ? "header-section show" : "header-section"}>
          <span className="logo">COPPER</span>
          <ul className= {isActive ? "nav-list show" : "nav-list"}>
            <li><a>Home</a></li>
            <li><a>Commands</a></li>
            <li><a>Features</a></li>
            <li><a>Supports</a></li>
          </ul>
      </div>
      <span className="toggle-btn" onClick={()=>toggle()}>
        <FaBarsStaggered />
      </span>
    </>
  )
}

export default Header