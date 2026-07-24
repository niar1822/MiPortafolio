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
        className="display-4 text-center fw-bold mb-5 p-3"
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
                  src="./img/colmadoApp.png"
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
                  src="./img/cenarApp.png"
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
              <div className="card-img">
                <img
                  src="./img/ProjectColmadoApp.png"
                  alt="Imagen en proceso"
                />
              </div>
            </div>
            <div className="card-body d-flex flex-column">
              <h4 className="mb-3 text-center">proceso</h4>
              <p className="card-text p-3">
                Este es un ptojecto desarrollado en equipo para la materia de
                progamamción 3 este es un app wed desarrollado con react en el
                front-end, node.js en el back y como motor de base de datos
                tilizamos mongoDB
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
              <div className="card-img">
                <img
                  src="./img/ProjectColmadoApp.png"
                  alt="Imagen en proceso"
                />
              </div>
            </div>
            <div className="card-body d-flex flex-column">
              <h4 className="mb-3 text-center">Proceso</h4>
              <p className="card-text p-3">
                Este es un programa desarrollado para la materia de progamacion
                1, esta diseñádo en Windows forms, con C# y SQL server
              </p>
            </div>
            <div className="d-flex justify-content-center mt-auto p-2 gap-2">
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
                href="https://github.com/nasser05collado22-sys/AppCenter1"
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
