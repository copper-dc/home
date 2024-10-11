import "./Header.css"
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const toggle = () => {
    
  }
  return (
    <>
      <div className="header-section">
          <span className="logo">COPPER</span>
          <ul>
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