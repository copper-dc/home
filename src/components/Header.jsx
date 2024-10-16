import "./Header.css"
import { IoLogoGithub } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const toggle = () => {
    document.getElementById("nav").classList.toggle("show");
    document.getElementById("open").classList.toggle("show");
  }
  return (
    <div className="nav-container">
        <h3 className="logo">COPPER</h3>
        <ul id="nav" className="nav-bar">
            <li className="link">Commands</li>
            <li className="link">Documentation</li>
            <li className="link">Features</li>
            <li className="link">Support</li>
            <li className="btn"><IoLogoGithub className="icon"/>Github</li>
            <li className="btn"><CiLogin className="icon"/>Login</li>
            <span className="toggle-btn"><IoCloseCircleOutline className="close-btn" onClick={toggle}/></span>
        </ul>
        <IoMenu className="menu-btn show" id="open" onClick={toggle}/>
        
    </div>
  )
}

export default Header