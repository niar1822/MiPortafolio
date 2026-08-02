import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiPostman,
  SiDotnet,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

import { motion } from "framer-motion";
import "./skills.css";
export default function Skills() {
  return (
    <section id="skills" className="container ">
      <motion.h2
        className="display-4 fw-bold text-center mb-3 py-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Mis Tecnologías
      </motion.h2>

      <div className="row g-4">
        {/* Frontend */}
        <div className="col-md-6 col-lg-3">
          <motion.div
            whileHover={{ y: -10 }}
            className="card bg-dark border-secondary h-100"
          >
            <div className="card-body text-center">
              <h4 className="mb-4">Frontend</h4>

              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <FaReact className="" />
                  <p>React</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <SiJavascript />
                  <p>Javascript</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <SiHtml5 />
                  <p>HTML5</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <SiCss />
                  <p>CSS</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <FaBootstrap />
                  <p>Booststrap</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Backend */}

        <div className="col-md-6 col-lg-3">
          <motion.div
            whileHover={{ y: -10 }}
            className="card bg-dark border-secondary h-100"
          >
            <div className="card-body text-center">
              <h4 className="mb-4">Backend</h4>

              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <FaNodeJs />
                  <p>Node.js</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <SiDotnet />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Base de datos */}

        <div className="col-md-6 col-lg-3">
          <motion.div
            whileHover={{ y: -10 }}
            className="card bg-dark border-secondary h-100"
          >
            <div className="card-body text-center">
              <h4 className="mb-4">Base de Datos</h4>

              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1">
                <motion.div
                  className="d-flex flex-column align-items-center"
                  whileHover={{ y: -10 }}
                >
                  <SiMongodb />
                  <p>MongoDB</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <DiMsqlServer />
                  <p>SQL Server</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Herramientas */}

        <div className="col-md-6 col-lg-3">
          <motion.div
            whileHover={{ y: -10 }}
            className="card bg-dark border-secondary h-100"
          >
            <div className="card-body text-center">
              <h4 className="mb-4">Herramientas</h4>

              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <SiPostman />
                  <p>Postman</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <FaGithub />
                  <p>Github</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="d-flex flex-column align-items-center"
                >
                  <FaGitAlt />
                  <p>Git</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
