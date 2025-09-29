import React from "react";
import { motion } from "framer-motion";

const certificatesData = [
  {
    title: "Cloud Application Developer – IBM",
    description:
      "Gained hands-on experience in deploying cloud-native applications using IBM Cloud services, covering application lifecycle, cloud architecture, and DevOps best practices.",
  },
  {
    title: "Java Fundamentals and Microservices – IBM",
    description:
      "Completed foundational training in Java programming and Microservices architecture including OOP, exception handling, and implementation of microservices.",
  },
  {
    title: "Python – GUVI",
    description:
      "Developed core Python skills including data types, loops, functions, and file handling. Built mini-projects applying these concepts in real coding scenarios.",
  },
  {
    title: "RDBMS & SQL – IBM",
    description:
      "Learned relational database principles, normalization, SQL queries, joins, and database design fundamentals with hands-on practice.",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      style={{
        minHeight: "60vh",
        backgroundColor: "#111827",
        color: "#ffffffff",
        padding: "50px 20px",
      }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "50px" }}
      >
        Certificates
      </motion.h2>

      {/* Certificates Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {certificatesData.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            style={{
              backgroundColor: "#1f2937",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ color: "#facc15", marginBottom: "10px" }}>
              {cert.title}
            </h3>
            <p style={{ fontSize: "15px" }}>{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
