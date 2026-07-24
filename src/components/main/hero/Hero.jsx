import "./hero.css";
import Stack from "react-bootstrap/Stack";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const imgNasser = "./img/NasserDL.jpeg";
  return (
    <section id="hero" className="hero">
      <div className="container d-flex justify-content-between">
        <div className="justify-content-center">
          <h1>Hola, soy Nasser</h1>
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
            repeat={1}
          />
          <div className="mt-3">
            <Stack direction="horizontal" gap={3}>
              <motion.div
                className="p-2"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
              >
                <FaJsSquare size={60} />
              </motion.div>
              <motion.div
                className="p-2"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
              >
                <FaReact size={60} />
              </motion.div>
              <motion.div
                className="p-2"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
              >
                <FaNodeJs size={60} />
              </motion.div>
              <motion.div
                className="p-2"
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
              >
                <SiMongodb size={60} />
              </motion.div>
            </Stack>
          </div>
          <motion.span
            className="mt-3"
            initial={{ x: -180 }}
            animate={{ x: 0 }}
          >
            Soy desarrollador Full Stack en formación con experiencia en React,
            JavaScript y Node.js. Disfruto crear aplicaciones modernas,
            escalables y enfocadas en la experiencia del usuario.
          </motion.span>
          <div className="mt-4">
            <motion.a
              className="me-3 btn btn-outline-primary"
              href="#projects"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Ver Porjectos
            </motion.a>
            <motion.a
              className="me-3 btn btn-outline-primary"
              href="./Curriculum_Nasser_Collado.pdf"
              download
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Descargar CV
            </motion.a>
          </div>
          <motion.div
            className="mt-5 d-flex"
            initial={{ y: 180 }}
            animate={{ y: 0 }}
          >
            <motion.a
              className="P-2 me-4"
              target="_blank"
              href="https://github.com/niar1822"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              className="P-2 me-4"
              target="_blank"
              href="https://github.com/niar1822"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              className="P-2 me-4"
              target="_blank"
              href="https://www.linkedin.com/in/nasser-collado-96550a275/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoLogoLinkedin size={30} />
            </motion.a>
            <motion.a
              target="_blank"
              href="mailto:nasserisraelcollado@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BiLogoGmail size={30} />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className="ms-auto"
          initial={{ y: -200 }}
          animate={{ y: 0 }}
        >
          <img className="imgNasse-hero" src={imgNasser} alt="img Nasser" />
        </motion.div>
      </div>
    </section>
  );
}
