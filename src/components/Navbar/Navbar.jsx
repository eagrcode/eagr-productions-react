// External imports
import { HiMail } from "react-icons/hi";

// Hooks
import { useState, useEffect } from "react";

function Navbar({ title }) {
  // Init state
  const [isOpen, setIsOpen] = useState(false);
  // const [windowSize, setWindowSize] = useState(getWindowSize());
  // const [isWideEnough, setIsWideEnough] = useState(false);

  // Toggle active class
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // listen to window width
  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  // function getWindowSize() {
  //   const { innerWidth, innerHeight } = window;
  //   return { innerWidth, innerHeight };
  // }

  // console.log(innerWidth);
  // console.log(isWideEnough);

  return (
    <header>
      <nav className="nav-bar" id="nav-bar">
        <a className="logo" href="#">
          {title}
        </a>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item" onClick={handleClick}>
            <a href="#" className="nav-link" id="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item" onClick={handleClick}>
            <a href="#portfolio-header" className="nav-link" id="nav-link">
              Portfolio
            </a>
          </li>

          <li className="nav-item" onClick={handleClick}>
            <a href="#services" className="nav-link" id="nav-link">
              Services
            </a>
          </li>

          <li className="nav-item" onClick={handleClick}>
            <a href="#contact" className="nav-link" id="mail-icon">
              <HiMail size={50} color="hsla(327, 100%, 30%, 0.7)" />
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
