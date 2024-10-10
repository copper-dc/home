import "./Header.css"
const Header = () => {
  return (
    <div className="header-section">
        <span className="logo">COPPER</span>
        <ul>
          <li><a>Home</a></li>
          <li><a>Commands</a></li>
          <li><a>Features</a></li>
          <li><a>Supports</a></li>
        </ul>
    </div>
  )
}

export default Header