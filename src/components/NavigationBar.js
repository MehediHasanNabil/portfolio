import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" sticky="top" className={`shadow ${styles.navbar}`}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Item>
                <NavLink className="nav-link fs-5 mx-2 text-light" to="/" end>
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-2 text-light" href="#about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-2 text-light" href="#skills">
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-2 text-light" href="#contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="fs-5 mx-2 text-light" href="#contact">
                  Blog
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
