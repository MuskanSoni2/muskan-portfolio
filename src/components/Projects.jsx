import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projectsData = [
  {
    title: "Promptly – AI-Powered Portable Chatbot",
    description:
      "Developed a full-stack web app with a portable AI chatbot capable of answering queries in real-time. Integrated ML APIs and Firebase for authentication & database sync.",
    tech: ["React.js", "Node.js", "MongoDB", "Firebase", "JavaScript"],
  },
  {
    title: "CogniVerse – AI Metaverse Classroom",
    description:
      "Built an immersive AI-driven metaverse classroom to enhance learning experiences. Integrated interactive modules and real-time collaboration features.",
    tech: ["React.js", "Node.js", "Three.js", "Firebase", "JavaScript"],
  },
  {
    title: "Resume Builder – Full Stack Web Application",
    description:
      "Built a full-stack resume builder with an interactive UI/UX. Users can create, customize, and download resumes dynamically. Focused on responsive design and smooth user experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "HTML/CSS/JavaScript"],
  },
  {
    title: "Sentiment Analysis of Product Reviews",
    description:
      "Developed an AI-based project to analyze product reviews using a Naïve Bayes classifier. Integrated with a web interface for real-time sentiment analysis.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "HTML/CSS/JavaScript"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "50px" }}
      >
        Projects
      </motion.h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {projectsData.map((project, idx) => (
          <Tilt key={idx} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              style={{
                backgroundColor: "#111827",
                padding: "20px",
                borderRadius: "15px",
                width: "300px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#facc15" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "#374151",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
