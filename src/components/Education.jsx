import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2022 - 2026",
    degree: "B.Tech, Computer Science & Engineering",
    institute: "Shri Vaishnav Vidhyapeeth Vishwavidhyalaya",
    cgpa: "9.20 (As of 5th Sem)",
  },
  {
    year: "2021 - 2022",
    degree: "Class XII (Mathematics)",
    institute: "Green Bells Public School, Burhar",
    cgpa: "86.4%",
  },
  {
    year: "2019 - 2020",
    degree: "Class X",
    institute: "Green Bells Public School, Burhar",
    cgpa: "76.8%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f2937",
        color: "#fff",
        padding: "50px 20px",
      }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", fontSize: "2rem", color: "#ffffffff", marginBottom: "40px" }}
      >
        Education
      </motion.h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            style={{
              backgroundColor: "#111827",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h3><span style={{ color: "#facc15" }}>{edu.degree}</span></h3>
            <p>
              <strong>Institute:</strong> {edu.institute}
            </p>
            <p>
              <strong>Year:</strong> {edu.year} | <strong>CGPA/Marks:</strong>{" "}
              {edu.cgpa}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
