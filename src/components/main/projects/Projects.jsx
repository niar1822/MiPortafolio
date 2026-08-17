import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa6";
import "./projects.css";

export default function Projects() {
  return (
    <section id="projects" className="container p-5">
      <motion.h2
        initial={{ y: 0 }}
        animate={{ y: 50 }}
        className="display-4 text-center fw-bold mb-5 py-5"
      >
        Proyectos
      </motion.h2>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <motion.div
            className="card bg-dark border-secundary h-100 fs-2"
            whileHover={{ y: -10 }}
          >
            <div className="card-header">
              <div className="card-img">
                <motion.img
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  src="/src/assets/img/colmadoApp.png"
                  alt="Imagen app colmado"
                />
              </div>
            </div>
            <div className="card-body d-flex flex-column">
              <h4 className="mb-3 text-center">Colmado App</h4>
              <p className="card-text p-3">
                Este es un ptojecto desarrollado en equipo para la materia de
                progamamción 3 este es un app wed desarrollado con react,
                Node.js, MogoDB
              </p>
              <div className="d-flex mt-auto justify-content-center p-2 gap-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="btn btn-outline-primary"
                  href="https://colmado-app.vercel.app/"
                >
                  <FaLaptopCode size={20} />
                  Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="btn btn-outline-success"
                  href="https://github.com/Geisonm161/colmadoappapi"
                >
                  <VscCode size={20} />
                  codigo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-lg-3 col-md-6">
          <motion.div
            className="card bg-dark border-secundary h-100 fs-2"
            whileHover={{ y: -10 }}
          >
            <div className="card-header">
              <div id="project-img-container" className="card-img">
                <motion.img
                  whileHover={{
                    scale: 1.3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  src="/src/assets/img/cenarApp.png"
                  alt="Imagen app cenar"
                />
              </div>
            </div>
            <div className="card-body d-flex flex-column">
              <h4 className="mb-3 text-center">Clon de uber</h4>
              <p className="card-text p-3">
                Este es un proyecto desarrollado para la materia de rogramacion
                wed, esta desarrollado con handlerbars, node.js y mongoDB
              </p>
              <div className="d-flex mt-auto justify-content-center p-2 gap-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="btn btn-outline-primary"
                  href="https://appcenar1-production-4693.up.railway.app/"
                >
                  <FaLaptopCode size={20} />
                  Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="btn btn-outline-success"
                  href="https://github.com/nasser05collado22-sys/AppCenter1"
                >
                  <VscCode size={20} />
                  codigo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-lg-3 col-md-6">
          <motion.div
            className="card bg-dark border-secundary h-100 fs-2"
            whileHover={{ y: -10 }}
          >
            <div className="card-header">
              <motion.div
                className="card-img
              "
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <img src="/src/assets/img/drDrip.png" alt="Imagen de drDrip" />
              </motion.div>
            </div>
            <div className="card-body d-flex flex-column">
              <h4 className="mb-3 text-center">Dr_drip</h4>
              <p className="card-text p-3">
                Este es un proyecto personal desarrollado para una tienda de
                ventas de ropa, esta desarrollado con react, node.js.
              </p>
              <div className="d-flex mt-auto justify-content-center p-2 gap-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="btn btn-outline-primary"
                  href="https://wed-site-tienda.vercel.app/"
                >
                  <FaLaptopCode size={20} />
                  Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  className="btn btn-outline-success"
                  href="https://github.com/niar1822/wedSiteTienda"
                >
                  <VscCode size={20} />
                  codigo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-lg-3 col-md-6">
          <motion.div
            className="card bg-dark border-secundary h-100 fs-2"
            whileHover={{ y: -10 }}
          >
            <div className="card-header">
              <motion.div
                className="card-img"
                whileHover={{
                  scale: 1.3,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <img src="/src/assets/img/image.png" alt="Imagen ironPulse" />
              </motion.div>
            </div>
            <div className="card-body d-flex flex-column">
              <h4 className="mb-3 text-center">Iron Pulse</h4>
              <p className="card-text p-3">
                Este es un web site desarrollado para un entrenador de un gym,
                el cual muestra demostrar su integridad, visiones y metas
              </p>
            </div>
            <div className="d-flex justify-content-center mt-auto p-2 gap-2">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="btn btn-outline-primary"
                href="iron-pulse-649dogeoz-niar1822s-projects.vercel.app"
              >
                <FaLaptopCode size={20} />
                Demo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                className="btn btn-outline-success"
                href="https://github.com/niar1822/iron-pulse"
              >
                <VscCode size={20} />
                codigo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
