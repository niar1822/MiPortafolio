import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import ThemeToggle from "../../theme/themetoggle";

export default function Navbarjs() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            className="imgNasser"
            src="./img/logo.png"
            alt="imagen de nasser"
          />
          <Navbar.Brand href="#hero">Nasser Collado Mesa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-auto">
            <Nav.Link href="#hero">Hero</Nav.Link>
            <Nav.Link href="#abaut">Sobre mi</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Proyecto</Nav.Link>
            <div className="">
              <ThemeToggle />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
