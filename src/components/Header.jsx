import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/Profile.png"; // make sure your image is in src/assets/

const roles = [
  "Full Stack Developer",
  "Blockchain Competent",
  "AI Enthusiast",
  "React.js Developer",
  "Interaction Designer",
];

const Header = () => {
  return (
    <header
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        flexWrap: "wrap",
        gap: "60px", // increased gap for spacing
      }}
    >
      {/* Left Side - Text */}
      <motion.div
        style={{
          flex: "1",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // center vertically
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <motion.h1
          style={{ fontSize: "3.5rem", color: "#facc15", marginBottom: "20px" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Muskan Soni
        </motion.h1>

        {/* Typewriter Roles */}
        <motion.h2
          style={{ fontSize: "1.7rem", color: "#e5e7eb", minHeight: "2rem", marginBottom: "20px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <Typewriter
            words={roles}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        {/* Motivational Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
          style={{ fontSize: "1.2rem", maxWidth: "600px", color: "#9ca3af", fontStyle: "italic", textAlign: "center" }}
        >
          "From pixels to protocols, I craft web experiences that matter."
        </motion.p>
      </motion.div>

      {/* Right Side - Profile Picture */}
      <motion.div
        style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <img
          src={profilePic}
          alt="Muskan Soni"
          style={{
            width: "400px",   // increased size
            height: "400px",  // increased size
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #facc15",
          }}
        />
      </motion.div>
    </header>
  );
};

export default Header;