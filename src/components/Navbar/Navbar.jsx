// External imports
import { HiMail } from "react-icons/hi";

// Hooks
import { useState } from "react";

function Navbar({ title }) {
  // Init state
  const [isOpen, setIsOpen] = useState(false);

  // Toggle active class
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className="nav-bar" id="nav-bar">
        <a className="logo" href="#">
          {title}
        </a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="" className="nav-link" id="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#portfolio" className="nav-link" id="nav-link">
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a href="#services" className="nav-link" id="nav-link">
              Services
            </a>
          </li>

          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <HiMail size={50} />
            </a>
          </li>
        </ul>

        <div
          onClick={handleClick}
          className={`hamburger ${isOpen ? "active" : ""}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
