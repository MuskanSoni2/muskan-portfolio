import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      style={{
        minHeight: "60vh",
        backgroundColor: "#111827",
        color: "#fff",
        padding: "60px 20px",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#facc15", marginBottom: "40px" }}>
        About Me
      </h2>
      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8", fontSize: "1.1rem" }}>
I'm a Full-Stack & Blockchain Developer passionate about creating dynamic web applications, integrating AI, and designing engaging UI/UX experiences. Skilled in React.js, Node.js, Express.js, MongoDB, and cloud platforms.
Constantly exploring emerging technologies and strive to deliver efficient, innovative, and user-friendly digital solutions.
      </p>
    </motion.section>
  );
};

export default About;
