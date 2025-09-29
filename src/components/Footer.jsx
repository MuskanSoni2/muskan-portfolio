import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "#9ca3af",
        textAlign: "center",
        padding: "12px 20px", // tighter padding
        marginTop: "5px", // very small margin
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Muskan Soni. All rights reserved.
      </p>
      <div style={{ marginTop: "8px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <a
          href="#top"
          style={{ color: "#facc15", textDecoration: "none", transition: "0.3s" }}
          onMouseEnter={(e) => e.target.style.color = "#eab308"}
          onMouseLeave={(e) => e.target.style.color = "#facc15"}
        >
          Back to Top
        </a>
        <a
          href="https://github.com/MuskanSoni2"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#facc15", textDecoration: "none", transition: "0.3s" }}
          onMouseEnter={(e) => e.target.style.color = "#eab308"}
          onMouseLeave={(e) => e.target.style.color = "#facc15"}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/muskan-soni2/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#facc15", textDecoration: "none", transition: "0.3s" }}
          onMouseEnter={(e) => e.target.style.color = "#eab308"}
          onMouseLeave={(e) => e.target.style.color = "#facc15"}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
