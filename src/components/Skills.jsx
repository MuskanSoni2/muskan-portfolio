import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: 70 },
      { name: "Python & Python Libraries", level: 70 },
    ],
  },
  {
    category: "Web Technologies & Frameworks",
    skills: [
      { name: "HTML, CSS & JavaScript", level: 85 },
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "Firebase", level: 70 },
      { name: "IBM Cloud", level: 60 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 80 },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", level: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "#fff",
        padding: "50px 20px",
      }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "50px" }}
      >
        Technical Skills
      </motion.h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {skillsData.map((category, idx) => (
          <div key={idx} style={{ marginBottom: "40px" }}>
            {/* Category Headline */}
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: "20px", color: "#facc15" }}
            >
              {category.category}
            </motion.h3>

            {/* Skills Progress Bars */}
            {category.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ marginBottom: "15px" }}
              >
                <p style={{ marginBottom: "5px" }}>{skill.name}</p>
                <div
                  style={{
                    backgroundColor: "#374151",
                    borderRadius: "10px",
                    height: "20px",
                    width: "100%",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    style={{
                      height: "100%",
                      backgroundColor: "#facc15",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
