import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import "./abaut.css";

export default function Abaut() {
  return (
    <motion.section
      className="container"
      id="abaut"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="row">
        <div className="col-lg-4">
          <Card className="bg-dark" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title> Full Stack Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Estudiante de Ingeniería de Software
              </Card.Subtitle>
              <Card.Text>Aprendiendo React, Node.js y .NET</Card.Text>
              <Card.Link href="#">
                Santo Domingo, República Dominicana
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-8">
          <h2>
            <strong>Sobre Mi</strong>
          </h2>
          <div>
            <span>
              Soy desarrollador de software en formación con interés en el
              desarrollo Full Stack, enfocado en la creación de aplicaciones web
              modernas y el desarrollo de aplicaciones nativas. Me apasiona
              aprender nuevas tecnologías y convertir ideas en soluciones
              funcionales que ofrezcan una excelente experiencia de usuario.
            </span>
          </div>
          <div className="mt-3">
            <h4>
              <strong>Lo que hago</strong>
            </h4>
            <Stack direction="Horizontal" gap={2}>
              <div className="p-2">
                Desarrollo interfaces modernas con React
              </div>
              <div className="p-2">Desarrollo APIs con Node.js</div>
              <div className="p-2">Diseño bases de datos con MongoDB</div>
              <div className="p-2">Desarrollo aplicaciones Full Stack</div>
            </Stack>
          </div>
          <div className="Objetivo mt-3">
            <h3>
              <strong>Mis objetivos</strong>
            </h3>
            <span>
              Continuar creciendo profesionalmente y participar en proyectos que
              generen impacto.
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
