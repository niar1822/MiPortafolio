import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container text-center">
        <h4 className="fw-bold">Nasser Collado</h4>

        <p className="text-secondary">
          Desarrollador Full Stack | React | Node.js | MongoDB
        </p>

        <div className="d-flex justify-content-center gap-4 my-3">
          <a
            href="https://github.com/niar1822"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/nasser-collado-96550a275/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>

          <a target="_blank" href="mailto:nasserisraelcollado@gmail.com">
            <FaEnvelope size={28} />
          </a>
        </div>

        <small className="text-secondary">
          © {new Date().getFullYear()} Nasser Collado. Todos los derechos
          reservados.
        </small>
      </div>
    </footer>
  );
}
