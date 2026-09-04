import "./hero.css";
import Stack from "react-bootstrap/Stack";
import { FaGithub, FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const imgNasser = "../../../assets/img/nasser.png";

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Texto */}
          <div className="col-lg-7 text-center text-lg-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Hola, soy Nasser
            </motion.h1>

            <TypeAnimation
              sequence={[
                "Desarrollador Full Stack",
                2000,
                "Diseñador Web",
                2000,
                "Programador React",
                2000,
              ]}
              speed={70}
              repeat={3}
              className="display-6 fw-bold text-primary"
            />

            <div className="mt-4">
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-center justify-content-lg-start"
              >
                <motion.div whileHover={{ y: -8 }}>
                  <FaJsSquare size={55} />
                </motion.div>

                <motion.div whileHover={{ y: -8 }}>
                  <FaReact size={55} />
                </motion.div>

                <motion.div whileHover={{ y: -8 }}>
                  <FaNodeJs size={55} />
                </motion.div>

                <motion.div whileHover={{ y: -8 }}>
                  <SiMongodb size={55} />
                </motion.div>
              </Stack>
            </div>

            <motion.p
              className="lead mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Soy desarrollador Full Stack en formación con experiencia en
              React, JavaScript y Node.js. Disfruto crear aplicaciones modernas,
              escalables y enfocadas en la experiencia del usuario.
            </motion.p>

            <div className="mt-4">
              <motion.a
                href="#projects"
                className="btn btn-primary me-3"
                whileHover={{ scale: 1.05 }}
              >
                Ver Proyectos
              </motion.a>

              <motion.a
                href="./Curriculum_Nasser_Collado.pdf"
                download
                className="btn btn-outline-primary"
                whileHover={{ scale: 1.05 }}
              >
                Descargar CV
              </motion.a>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-4 mt-5">
              <motion.a
                href="https://github.com/niar1822"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
              >
                <FaGithub size={30} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/nasser-collado-96550a275/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
              >
                <IoLogoLinkedin size={30} />
              </motion.a>

              <motion.a
                href="mailto:nasserisraelcollado@gmail.com"
                whileHover={{ y: -5 }}
              >
                <BiLogoGmail size={30} />
              </motion.a>
            </div>
          </div>

          {/* Imagen */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <motion.img
              src={imgNasser}
              alt="Nasser"
              className="img-fluid hero-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
