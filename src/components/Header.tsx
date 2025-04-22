import { useEffect, useState, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../css/Header.css";

function Header() {
  const [scrollClass, setScrollClass] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sidebar, setSidebar] = useState("-100%");
  const [isSidebar, setIsSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollClass(window.scrollY > 200 ? "header-scroll" : "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const openSidebar = () => {
    setIsSidebar(true);
    setSidebar("0%");
  };
  const closeSidebar = () => {
    setIsSidebar(false);
    setSidebar("-100%");
  };
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      // Specify the type as MouseEvent
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div id="head-container" className=" flex items-center justify-start">
        <header id="header-scroll" className={scrollClass}>
          <div className="header">
            <div className="header-left">
              <Link to="/#" className="header-logo">
                <i className="fa-duotone fa-code"></i>
                <div className="brand-text">
                  <span className="text-1">Chhavi</span>
                </div>
              </Link>
              <ul className="header-menu hide-header">
                <Link to="/#">
                  <li className="menu-item">
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="/#skills">
                  <li className="menu-item">
                    <p>Skills</p>
                  </li>
                </Link>
                <Link to="/links">
                  <li className="menu-item">
                    <p>Links</p>
                  </li>
                </Link>
                <Link to="/#contact">
                  <li className="menu-item">
                    <p>Contact</p>
                  </li>
                </Link>

                <li className="menu-item menu-theme">
                  Theme
                  <div className="theme-dropdown">
                    <span
                      id="light-theme-toggle-btn"
                      onClick={() => setTheme("light")}
                    >
                      <i
                        className="fa-regular fa-check"
                        style={{ opacity: theme === "light" ? 1 : 0 }}
                      ></i>{" "}
                      Light
                    </span>
                    <span
                      id="dark-theme-toggle-btn"
                      onClick={() => setTheme("dark")}
                    >
                      <i
                        className="fa-regular fa-check"
                        style={{ opacity: theme === "dark" ? 1 : 0 }}
                      ></i>{" "}
                      Dark
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="btns hide-header">
                <a
                  target="_blank"
                  href="https://github.com/chhavipaliwal"
                  className="btn"
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href="https://linkedin.com/in/chhavipaliwal"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </div>
              {!isSidebar && (
                <button className="header-menu-open" onClick={openSidebar}>
                  <i className="fa-duotone fa-bars-staggered"></i>
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
      <div
        className="sidebar"
        ref={sidebarRef}
        style={{ transform: `translateX(${sidebar})` }}
      >
        <div className="sidebar-header">
          <Link to="/#" className="sidebar-brand">
            <i className="fa-duotone fa-code"></i>
            <div className="brand-text">
              <span className="text-1">Chhavi</span>
            </div>
          </Link>
          <button className="sidebar-close" onClick={closeSidebar}>
            <i className="fa-duotone fa-times"></i>
          </button>
        </div>
        <ul className="sidebar-menu">
          <Link to="/#">
            <li className="menu-item">
              <i className="fa-regular fa-house"></i>
              <p>Home</p>
            </li>
          </Link>
          <Link to="#skills">
            <li className="menu-item">
              <i className="fa-regular fa-code"></i>
              <p>Skills</p>
            </li>
          </Link>
          <Link to="/links">
            <li className="menu-item">
              <i className="fa-regular fa-link-simple"></i>
              <p>Links</p>
            </li>
          </Link>
          <Link to="/#contact">
            <li className="menu-item">
              <i className="fa-regular fa-envelope"></i>
              <p>Contact</p>
            </li>
          </Link>
          <li className="menu-item menu-theme">
            <span>Light</span>
            <div className="toggle-btn">
              <input
                type="checkbox"
                id="switch"
                hidden
                checked={theme === "dark"}
                onClick={toggleTheme}
              />
              <label htmlFor="switch">Toggle</label>
            </div>
            <span>Dark</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
