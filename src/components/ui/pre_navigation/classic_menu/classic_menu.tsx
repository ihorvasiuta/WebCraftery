import React, { useState, useEffect } from "react";
import "./classic_menu.css";

const ClassicNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < 80);

      const sections = document.querySelectorAll(
        "section[id]"
      ) as NodeListOf<HTMLElement>;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset > sectionTop &&
          window.pageYOffset <= sectionTop + sectionHeight
        ) {
          const sectionId = section.getAttribute("id");
          if (sectionId) setActiveId(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header ${!showHeader ? "scroll-header" : ""}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Logo
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="bx bx-menu header__toggle" id="header-toggle"></i>
        </div>
        <div
          className={`nav__menu ${isMenuOpen ? "active" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {["home", "about", "skills", "portfolio", "contactme"].map(
              (item) => (
                <li className="nav__item" key={item}>
                  <a
                    href={`#${item}`}
                    className={`nav__link ${
                      activeId === item ? "active-link" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="nav__name">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default ClassicNav;
