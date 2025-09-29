import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
     { name: "Home", href: "#header", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
  e.preventDefault();

  if (href === "#header") {
    // Reset activeSection to force re-render
    setActiveSection("");
    setTimeout(() => setActiveSection("home"), 50);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(menuItems.find((item) => item.href === href).id);
    }
  }

  setIsOpen(false);
};


  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
        backgroundColor: "#111827",
        padding: "23px 25px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
        fontFamily: "'Montserrat', sans-serif",
        boxSizing: "border-box", // fix overflow
      }}
    >
      {/* Desktop Menu */}
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap", // ensures it won’t overflow
          gap: "30px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "1.35rem",
        }}
        className="desktop-menu"
      >
        {menuItems.map((item) => (
          <li key={item.name} style={{ position: "relative" }}>
            <a
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              style={{
                color: activeSection === item.id ? "#facc15" : "#fff",
                textDecoration: "none",
                fontWeight: "600",
                transition: "color 0.3s",
              }}
            >
              {item.name}
            </a>
            {/* Hover / Active underline */}
            <span
              style={{
                position: "absolute",
                bottom: "-4px",
                left: 0,
                height: "2px",
                width: activeSection === item.id ? "100%" : "0",
                backgroundColor: "#facc15",
                transition: "width 0.6s ease-in-out",
              }}
              className="underline"
            />
          </li>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        style={{
          display: "none",
          flexDirection: "column",
          cursor: "pointer",
          gap: "6px",
          marginLeft: "20px",
        }}
        onClick={toggleMenu}
      >
        <span style={{ width: "28px", height: "3px", backgroundColor: "#fff" }} />
        <span style={{ width: "28px", height: "3px", backgroundColor: "#fff" }} />
        <span style={{ width: "28px", height: "3px", backgroundColor: "#fff" }} />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "60px",
            right: 0,
            width: "100%",
            backgroundColor: "#1f2937",
            listStyle: "none",
            padding: "20px",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "1.1rem",
          }}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                style={{
                  color: activeSection === item.id ? "#facc15" : "#fff",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* CSS */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .hamburger {
              display: flex;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;