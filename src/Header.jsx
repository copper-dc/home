import "./Header.css"
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { SlClose } from "react-icons/sl";

const Header = () => {
  const [isActive,setISActive]=useState(false);
  const toggle = () => {
    setISActive(!isActive);
  }
  const scroll = (e,idName) => {
    e.preventDefault();
    const element = document.getElementById(idName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <div className= {isActive ? "header-section show" : "header-section"}>
          <span className="logo">COPPER</span>
          <ul className= {isActive ? "nav-list show" : "nav-list"}>
            <li className="box" onClick={toggle}><Link to="/">Home</Link></li>
            <li className="box" onClick={toggle}><Link to="/commands">Commands</Link></li>
            <li className="box" onClick={toggle}><a href="#features" onClick={(e)=>scroll(e,"features")}>Features</a></li>
            <li onClick={toggle} className="login"><Link to="/login">Login</Link></li>
          </ul>
          <span className="toggle-btn" onClick={toggle}>
            {isActive ? <SlClose /> : <FaBarsStaggered />}
          </span>
        </div>
    </>
  )
}

export default Header