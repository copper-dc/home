import "./Header.css"

const Header = () => {
  return (
    <div className="nav-container">
        <h3 className="logo">COPPER</h3>
        <ul className="nav-bar">
            <li>Commands</li>
            <li>Documentation</li>
            <li>Features</li>
            <li>Github</li>
            <li>Login</li>
        </ul>
    </div>
  )
}

export default Header