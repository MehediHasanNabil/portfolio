import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" sticky="top" className={`shadow ${styles.navbar}`}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>
                <Nav.Link className="fs-5 mx-1 text-light" href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-1 text-light" href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-1 text-light" href="#skills">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-1 text-light" href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
