import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "75vh", // slightly reduced
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "50px 20px 20px 20px", // reduced bottom padding
      }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
          color: "#facc15",
        }}
      >
        Contact Me
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px", // slightly tighter gap
          alignItems: "flex-start", // aligns card and form
        }}
      >
        {/* Reach Out Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "350px",
            padding: "25px",
            borderRadius: "12px",
            backgroundColor: "#111827",
            lineHeight: "1.8",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >
          <h3 style={{ color: "#facc15", marginBottom: "15px" }}>Reach Out</h3>
          <p>Email: <a href="mailto:muskansoni0201@gmail.com" style={{ color: "#e5e7eb" }}>muskansoni0201@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/muskan-soni2/" target="_blank" rel="noopener noreferrer" style={{ color: "#e5e7eb" }}>Muskan Soni</a></p>
          <p>GitHub: <a href="https://github.com/MuskanSoni2" target="_blank" rel="noopener noreferrer" style={{ color: "#e5e7eb" }}>MuskanSoni2</a></p>
        </motion.div>

        {/* Contact Form (Simple, aligned) */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          style={{
            flex: "1",
            minWidth: "280px",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #374151",
              backgroundColor: "#111827",
              color: "#e5e7eb",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #374151",
              backgroundColor: "#111827",
              color: "#e5e7eb",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #374151",
              backgroundColor: "#111827",
              color: "#e5e7eb",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#facc15",
              color: "#111827",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#eab308")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#facc15")}
          >
            Send Message
          </button>
          {submitted && <p style={{ color: "#22c55e", marginTop: "8px" }}>Message sent successfully!</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
