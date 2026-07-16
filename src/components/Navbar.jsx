import "../styles/Navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>Personal Finance Tracker</h2>

      <div className="navbar-right">
        <span>Welcome, Dharu </span>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;